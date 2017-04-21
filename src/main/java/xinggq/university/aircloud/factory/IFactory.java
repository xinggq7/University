package xinggq.university.aircloud.factory;

import xinggq.university.aircloud.dao.IDataDao;

/**
 * Created by xinggq on 17-4-20.
 *
 * 工厂接口
 */
public interface IFactory {

    //获取实例
    IDataDao getInstance();
}
