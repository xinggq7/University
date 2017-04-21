package xinggq.university.aircloud.factory.factoryImpl;

import org.springframework.beans.factory.annotation.Autowired;
import xinggq.university.aircloud.dao.IDataDao;
import xinggq.university.aircloud.dao.currentDaoImpl.NangangDaoImpl;
import xinggq.university.aircloud.factory.IFactory;

/**
 * Created by xinggq on 17-4-21.
 *
 * 南岗工厂
 * 不用添加注解，原因是在工厂创建的时候手动将这个bean托管到了spring容器
 */
public class NangangFactoryImpl implements IFactory{

    @Autowired
    NangangDaoImpl nangangDaoImpl;


    //用于反射
    public NangangFactoryImpl(){

    }

    public IDataDao getInstance() {
        return nangangDaoImpl;
    }
}
