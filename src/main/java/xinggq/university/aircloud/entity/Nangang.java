package xinggq.university.aircloud.entity;

import net.sf.json.JSONObject;
import org.springframework.stereotype.Component;

/**
 * Created by xinggq on 17-4-21.
 *
 * 数据库nangang表对应实体类
 */
@Component
public class Nangang {

    private String wendu;//温度
    private String huichengnongdu;//灰尘浓度
    private String kongqizhiliang;//空气质量
    private String keranqitinongdu;//可燃气体浓度
    private String qiya;//气压
    private String shidu;//湿度
    private String time1;//时间


    @Override
    public String toString(){
        return JSONObject.fromObject(this).toString();
    }


    public String getWendu() {
        return wendu;
    }

    public void setWendu(String wendu) {
        this.wendu = wendu;
    }

    public String getHuichengnongdu() {
        return huichengnongdu;
    }

    public void setHuichengnongdu(String huichengnongdu) {
        this.huichengnongdu = huichengnongdu;
    }

    public String getKongqizhiliang() {
        return kongqizhiliang;
    }

    public void setKongqizhiliang(String kongqizhiliang) {
        this.kongqizhiliang = kongqizhiliang;
    }

    public String getKeranqitinongdu() {
        return keranqitinongdu;
    }

    public void setKeranqitinongdu(String keranqitinongdu) {
        this.keranqitinongdu = keranqitinongdu;
    }

    public String getQiya() {
        return qiya;
    }

    public void setQiya(String qiya) {
        this.qiya = qiya;
    }

    public String getShidu() {
        return shidu;
    }

    public void setShidu(String shidu) {
        this.shidu = shidu;
    }

    public String getTime1() {
        return time1;
    }

    public void setTime1(String time1) {
        this.time1 = time1;
    }
}
