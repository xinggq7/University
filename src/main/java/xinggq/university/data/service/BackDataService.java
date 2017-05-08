package xinggq.university.data.service;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import xinggq.university.data.Dao.BackDataDao;

/**
 * Created by xinggq on 17-5-8.
 */
@Component
@PropertySource("classpath:/applicationTableInfo.properties")
public class BackDataService {

    @Autowired
    BackDataDao dataDao;

    @Value("${table.name}")
    private String tableName;

    @Value("${table.fields.name}")
    private String fields;

    public void createTable(){
        dataDao.creatTable(tableName,fields.split(","));
    }

}
