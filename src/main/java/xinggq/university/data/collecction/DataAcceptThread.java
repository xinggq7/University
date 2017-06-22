package xinggq.university.data.collecction;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import xinggq.university.data.save.DataFilterThread;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.*;

/**
 * Created by xinggq on 17-5-6.
 *
 * 数据接收线程
 * 主要工作为以一秒一条的频率接受数据，
 */

@Component
public class DataAcceptThread extends Thread{

    private final Logger logger = LoggerFactory.getLogger(getClass());//日志

    private DatagramSocket socket ; //数据接收和发送的码头

    private SimpleDateFormat simpleDateFormate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//日期格式化

    private boolean isAccept = true;//是否接收数据

    public void setSocket(DatagramSocket socket) {
        this.socket = socket;
    }

    private void close() {

        isAccept = false;
        //判断socket是否已经关闭
        if (socket ==null ? true : socket.isClosed()) {
            return;
        }
        //没有关闭的话
        socket.close();
        socket = null;
    }

    /**
     * 函数功能：接受来自硬件电路发送的数据，并转换为直接量
     * @return 数据直接量
     * @author TheOthers
     */
    public String listen(){
        try
        {
            byte[] arrayOfByte1 = new byte[65507];
            //新创建一个数据包，并转换成报文
            DatagramPacket localDatagramPacket = new DatagramPacket(arrayOfByte1,arrayOfByte1.length);
            //永远不超时，就永远不会报异常
            this.socket.setSoTimeout(0);
            //将接收到的数据放在数据包中
            this.socket.receive(localDatagramPacket);
            if (localDatagramPacket.getLength() != 0){
                byte[] arrayOfByte2 = new byte[localDatagramPacket.getLength()];
                System.arraycopy(localDatagramPacket.getData(), 0, arrayOfByte2, 0, arrayOfByte2.length);
                String value=new String(arrayOfByte2).trim()+",\""+simpleDateFormate.format(new Date())+"\"";
                return value;
            }
        }catch (Exception e){
            logger.error(e.getMessage(),e);
        }
        return null;
    }

    /**
     * 函数功能：子线程函数，不断刷新data字符串，始终表示最新的数据
     */
    public void run() {
        ExecutorService pool = Executors.newSingleThreadExecutor();
        DataFilterThread dataFilterThread = new DataFilterThread();
        while (isAccept){
            try {
                //每隔1000毫秒接受一次数据
                Thread.sleep(1000);
                //将数据传递给数据保存线程
                dataFilterThread.setData(listen());
                //数据保存线程启动
                Future<Boolean> future = (Future<Boolean>) pool.submit(dataFilterThread);
//                try {
//                    // 等待计算结果，最长等待1秒，1秒后中止任务
//                    future.get(1, TimeUnit.SECONDS);
//                } catch (Exception e) {
//                    logger.error("数据处理超时",e);
//                    future.cancel(true);
//                }
            } catch (InterruptedException e) {
                logger.error(e.getMessage(),e);
            }
        }
        close();
    }

}
