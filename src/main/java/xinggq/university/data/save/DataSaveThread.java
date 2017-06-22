package xinggq.university.data.save;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import xinggq.university.data.service.BackDataService;

import java.util.ArrayList;

/**
 * Created by xinggq on 17-5-8.
 *
 * 数据保存线程
 */
@Component
@PropertySource("classpath:/applicationTableInfo.properties")
public class DataSaveThread extends Thread{

    //要保存的数据
    ArrayList catcheList ;

    @Autowired
    BackDataService backDataService;

    @Value("${table.name}")
    private String tableName;

    public void run(){

        backDataService.insertData(tableName,catcheList);
        //清空队列
        catcheList.clear();
    }

    public ArrayList getCatcheList() {
        return catcheList;
    }

    public void setCatcheList(ArrayList catcheList) {
        this.catcheList = catcheList;
    }
}
