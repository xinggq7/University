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

    @RequestMapping("/index")
    public String getView(){

        return "index";
    }
}
