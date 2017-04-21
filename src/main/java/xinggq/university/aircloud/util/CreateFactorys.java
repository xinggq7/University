package xinggq.university.aircloud.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.stereotype.Component;
import xinggq.university.aircloud.factory.IFactory;

/**
 * Created by xinggq on 17-4-21.
 *
 * 采用反射创建工厂实例，
 * 具体的工厂必须放在xinggq.university.aircloud.factory.factoryImpl包下。
 */
@Component
public class CreateFactorys {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    IFactory factoryInstance = null;

    //用于将自己创建的bean加入到spring容器
    @Autowired
    private AutowireCapableBeanFactory capableBeanFactory;

    /**
     * 获取工厂实例
     * @param name 工厂简名
     * @return
     */
    public  IFactory getInstance(String name) {

        name = "xinggq.university.aircloud.factory.factoryImpl."+
                (new StringBuilder()).append(Character.toUpperCase(name.charAt(0))).append(name.substring(1)).toString()
                +"FactoryImpl";
        try {
            if (name == null || ("").equals(name) || ("").equals(name.replaceAll(" ", ""))) {
                logger.error("创建工厂失败，参数为空或null");
            }else{
                Class clazz = Class.forName(name);
                factoryInstance = (IFactory)clazz.newInstance();
                //将自己创建的bean托管到spring容器中，要不然在这个对象依赖的其他对象不能注入
                capableBeanFactory.autowireBean(factoryInstance);
            }
        } catch (ClassNotFoundException e) {
            logger.error("参数错误，没有找到对应工厂");
            e.printStackTrace();
        }catch (Exception e){
            logger.error("创建工厂失败");
            e.printStackTrace();
        }

        return factoryInstance;
    }
}
