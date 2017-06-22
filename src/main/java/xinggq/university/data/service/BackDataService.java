package xinggq.university.data.service;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import xinggq.university.data.Dao.BackDataDao;

import java.util.ArrayList;

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

    /**
     * 创建表结构
     */
    public void createTable(){
        dataDao.creatTable(tableName,fields.split(","));
    }

    public void insertData(String tableName, ArrayList arrayList){
        dataDao.insertData(tableName,arrayList);
    }

}
