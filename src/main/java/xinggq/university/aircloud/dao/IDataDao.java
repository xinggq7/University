package xinggq.university.aircloud.dao;


import java.util.List;
import java.util.Map;

/**
 * Created by xinggq on 17-4-20.
 */
//@Mapper
public interface IDataDao {


    /**
     * 获取实时数据方法
     * @return  返回数据实体
     */
    Object getCurrentDate();

    /**
     * 获取历史数据d
     * @return  返回数据实体集合
     */
    List<Object> getHistoryData(int startId,int step);

    /**
     * 获取昨天总数据量和起始数据id
     * @return
     */
    Map<String,Integer> getLastDatanum();
}
