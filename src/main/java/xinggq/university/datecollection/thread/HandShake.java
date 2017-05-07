package xinggq.university.datecollection.thread;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

/**
 * Created by xinggq on 17-5-7.
 *
 * 握手程序，创建与硬件的连接
 */
@Component
public class HandShake {

    private final Logger logger = LoggerFactory.getLogger(getClass());//日志

    /**
     * 发送握手信号程序
     * @param paramArrayOfByte 标志信号转换成的字节数组
     * @param ip 硬件ip
     * @param port 端口号
     * @param socket socket实例
     * @return  发送结果成功（true）或者失败（false）
     */
    public boolean send(byte[] paramArrayOfByte, String ip, int port,DatagramSocket socket){

        DatagramPacket datagramPacket = null;
        try
        {
            //DatagramPacket类用于处理报文，将byte数组、目标地址、目标端口等数据包装成报文或者将报文拆卸成byte数组。
            //以一个包含数据的数组来创建DatagramPacket对象，
            //创建该DatagramPacket时还指定了IP地址和端口--这就决定了该数据报的目的。
            datagramPacket = new DatagramPacket(paramArrayOfByte, paramArrayOfByte.length, InetAddress.getByName(ip), port);
            //发送报文
            socket.send(datagramPacket);
            //如果没有异常抛出就表明发送成功
            return true;
        }catch (Exception localIOException){
            logger.error("数据发送异常");
            return false;
        }
    }
}
