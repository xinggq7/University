package xinggq.university.datecollection.thread;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by xinggq on 17-5-6.
 *
 * 数据接收线程
 * 主要工作为以一秒一条的频率接受数据，
 */

@Component
public class DataAcceptThread extends Thread{

    private final Logger logger = LoggerFactory.getLogger(getClass());//日志

    private DatagramSocket socket ; //数据接收和发送的码头

    private String data; //数据接收字符串

    private SimpleDateFormat simpleDateFormate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//日期格式化

    private boolean isAccept = true;//是否接收数据

    public DatagramSocket getSocket() {
        return socket;
    }

    public void setSocket(DatagramSocket socket) {
        this.socket = socket;
    }

    private void close() {

        isAccept = false;
        //判断socket是否已经关闭
        if (socket ==null ? true : socket.isClosed()) {
            return;
        }
        //没有关闭的话
        socket.close();
        socket = null;
    }

    /**
     * 函数功能：接受来自硬件电路发送的数据，并转换为直接量
     * @return 数据直接量
     * @author TheOthers
     */
    public String listen(){
        try
        {
            byte[] arrayOfByte1 = new byte[65507];
            //新创建一个数据包，并转换成报文
            DatagramPacket localDatagramPacket = new DatagramPacket(arrayOfByte1,arrayOfByte1.length);
            //永远不超时，就永远不会报异常
            this.socket.setSoTimeout(0);
            //将接收到的数据放在数据包中
            this.socket.receive(localDatagramPacket);
            if (localDatagramPacket.getLength() != 0){
                byte[] arrayOfByte2 = new byte[localDatagramPacket.getLength()];
                System.arraycopy(localDatagramPacket.getData(), 0, arrayOfByte2, 0, arrayOfByte2.length);
                String value=new String(arrayOfByte2).trim()+","+simpleDateFormate.format(new Date());
                return value;
            }
        }catch (Exception e){
            System.out.println("s");
            logger.error(e.getMessage(),e);
        }
        return null;
    }

    /**
     * 函数功能：子线程函数，不断刷新data字符串，始终表示最新的数据
     */
    public void run() {
        while (isAccept){
            try {
                //每隔1000毫秒接受一次数据
                Thread.sleep(1000);
                data =  listen();
                System.out.println(data);
            } catch (InterruptedException e) {
                logger.error(e.getMessage(),e);
            }
        }
        close();
    }

}
