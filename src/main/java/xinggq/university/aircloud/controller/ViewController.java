package xinggq.university.aircloud.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by xinggq on 17-4-21.
 * 视图控制器
 */
@Controller
//@RequestMapping("")
public class ViewController {

    /**
     * 最初参加比赛界面，多地区
     * @return
     */
    @RequestMapping("/index")
    public String getView(){

        return "index";
    }

    @RequestMapping("/bishe")
    public String getBView(){

        return "bishe";
    }
}
