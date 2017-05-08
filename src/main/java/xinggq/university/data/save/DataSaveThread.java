package xinggq.university.data.save;


import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * Created by xinggq on 17-5-8.
 *
 * 数据保存线程
 */
public class DataSaveThread extends Thread{

    //要保存的数据
    ArrayList catcheList ;

    public void run(){



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
