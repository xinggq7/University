package xinggq.university.aircloud.dao.currentDaoImpl;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import xinggq.university.aircloud.dao.IDataDao;
import xinggq.university.aircloud.entity.Nangang;

import java.util.List;
import java.util.Map;


/**
 * Created by xinggq on 17-4-21.
 *
 */
@Mapper
public interface NangangDaoImpl extends IDataDao {

    /**
     * 获取当前数据（准确的说是7秒之后的）
     * @return
     */
    @Select("select *from  university.nangang where time1 = date_add(now(),interval -7 second)")
    Nangang getCurrentDate();

    /**
     * 根据指定步长获取数据
     * @param step
     * @return
     */
    List<Object> getHistoryData(@Param("startId") int startId, @Param("step") int step);

    /**
     * 获取昨天所有数据的总数
     * @return
     */
    Map<String,Integer> getLastDatanum();

    /**
     * 导出指定日期的报表
     * @return
     */
    List<Map<String,Object>>  export(String data);
}
