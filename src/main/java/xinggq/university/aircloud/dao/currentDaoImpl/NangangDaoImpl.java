package xinggq.university.aircloud.dao.currentDaoImpl;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import xinggq.university.aircloud.dao.IDataDao;
import xinggq.university.aircloud.entity.Nangang;

import java.util.List;


/**
 * Created by xinggq on 17-4-21.
 *
 */
@Mapper
public interface NangangDaoImpl extends IDataDao {

    //@Select("select * from nangang where time1 = date_add(now(),interval -7 second) ")
    @Select("select * from nangang limit 0,1")
    Nangang getCurrentDate();

    //@Select("select * from nangang limit 0,10000")
    List<Object> getHistoryData();
}
