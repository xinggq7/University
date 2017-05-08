package xinggq.university.data;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import xinggq.university.data.collecction.DataAcceptThread;
import xinggq.university.data.collecction.HandShake;
import xinggq.university.data.service.BackDataService;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.net.DatagramSocket;

/**
 * Created by xinggq on 17-5-7.
 *
 * 后台数据采集启动程序
 * 采集包括两个步骤：
 * 1.与硬件建立连接
 * 2.一秒一条的频率获取数据
 */
@Configuration
@PropertySource("classpath:/applicationConnection.properties")
public class StartDateCollection implements ServletContextListener {

    private final Logger logger = LoggerFactory.getLogger(getClass());//日志

    private DatagramSocket socket ; //数据接收和发送的码头

    @Autowired
    DataAcceptThread dataAcceptThread;

    @Autowired
    HandShake handShake;

    @Autowired
    BackDataService dataService;

    public StartDateCollection(){
        try{
            socket = new DatagramSocket(0,null);
        }catch (Exception e){
            logger.error("DatagramSocket实例化异常",e);
        }
    }

    @Value("${connection.sign}")
    private String sign;

    @Value("${connection.ip}")
    private String ip;

    @Value("${connection.port}")
    private int port;


    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {

        dataService.createTable();
//        if(handShake.send(sign.getBytes(),ip,port,socket)){
//            dataAcceptThread.setSocket(socket);
//        }
//            dataAcceptThread.start();

    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}
