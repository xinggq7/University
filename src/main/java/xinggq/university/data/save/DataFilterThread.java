package xinggq.university.data.save;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import xinggq.university.data.SpringApplicationContextHolder;
import xinggq.university.data.util.Constant;
import xinggq.university.data.util.RegExp;
import java.util.ArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by xinggq on 17-5-8.
 *
 * 数据过滤线程
 * 过滤错误数据,并将数据暂存到缓存队列
 */
@Component
public class DataFilterThread extends Thread{

    //A和B两个数据缓存队列
    ArrayList catcheListA =new ArrayList<String>();
    ArrayList catcheListB =new ArrayList<String>();

    //存储计数器
    private int counter=0;

    //数据字符串
    private String data;

    DataSaveThread dataSaveThread;

    ExecutorService pool = Executors.newCachedThreadPool();

    private final Logger logger = LoggerFactory.getLogger(getClass());//日志

    public void run() {

        if(RegExp.isEffective(data)){
            return;
        }
        save(data);
    }

    /**
     * 保存数据方法
     * @param data 要保存的数据
     */
    private void save(String data){

        counter++;
        //暂存数据
        if(counter<= Constant.CATCHELLIST){
            catcheListA.add(data);
            //System.out.println("A"+catcheListA.size());
            if(catcheListA.size()==Constant.CATCHELLIST){
                sendArrayList(catcheListA);
            }
        }else {
            catcheListB.add(data);
            //System.out.println("B"+catcheListB.size());
            if(catcheListB.size()==Constant.CATCHELLIST){
                sendArrayList(catcheListB);
            }
        }
        if(counter==Constant.CATCHELLIST*2)
            counter=0;
    }

    /**
     * 将要保存的队列发送给数据保存线程,同时清空队列
     * @param arrayList
     */
    private void sendArrayList(ArrayList arrayList){

        dataSaveThread = (DataSaveThread) SpringApplicationContextHolder.getSpringBean("dataSaveThread");
        dataSaveThread.setCatcheList(arrayList);
        pool.execute(dataSaveThread);
//        try {
//            // 等待计算结果，最长等待10秒，10秒后中止任务
//            future.get(10, TimeUnit.SECONDS);
//        } catch (Exception e) {
//            logger.error("数据存储超时",e);
//            future.cancel(true);
//        }
    }


    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
