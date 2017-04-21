package xinggq.university.aircloud.service;

import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xinggq.university.aircloud.dao.IDataDao;
import xinggq.university.aircloud.entity.Nangang;
import xinggq.university.aircloud.factory.IFactory;
import xinggq.university.aircloud.util.CreateFactorys;

import java.util.List;

/**
 * Created by xinggq on 17-4-20.
 */

@Service
public class DataService {

    @Autowired
    CreateFactorys createFactorys;


    public String getCurrentDate(String name){
        Nangang nangang = (Nangang) getIDataDao(name).getCurrentDate();
        if(nangang==null)
            return null;
        return nangang.toString();
    }


    public String getHistoryData(String name){
        List<Object> listdata = getIDataDao(name).getHistoryData();
        return JSONArray.fromObject(listdata).toString();
        //return .toString();
    }

    /**
     *  获取对应的dao层对象
     * @param name 获取的依据
     * @return
     */
    private IDataDao getIDataDao(String name){

        //通过这个参数来获取相应的工厂（反射）实例，然后通过该工厂获取对应的dao层对象
        IFactory iFactory = createFactorys.getInstance(name);
        if(iFactory==null){
            return null;
        }
        return iFactory.getInstance();
    }
}
