package xinggq.university.aircloud.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by xinggq on 17-4-21.
 * 视图控制器,用于返回需要的页面
 */
@Controller
public class ViewController {


    /**
     * 最初参加比赛界面，多地区
     * @return
     */
    @RequestMapping("/index")
    public String getView(){

        return "index";
    }

    /**
     * 毕设页面，不提供地区选择
     * @return
     */
    @RequestMapping("/bishe")
    public String getBView(){

        return "bishe";
    }

    /**
     * 毕设页面，不提供地区选择
     * @return
     */
    @RequestMapping("/newBishe")
    public String getNBView(){

        return "newBishe";
    }

    /**
     * 毕设页面，不提供地区选择
     * @return
     */
    @RequestMapping("/A")
    public String A(){

        return "A";
    }
}
