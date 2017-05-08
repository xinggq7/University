package xinggq.university.data.Dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * Created by xinggq on 17-5-8.
 *
 * 对表操作的封装
 */
@Mapper
public interface BackDataDao {

    void creatTable(@Param("tableName") String tableName,@Param("fields") String[] fields);
}
