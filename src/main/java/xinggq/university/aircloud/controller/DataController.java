package xinggq.university.aircloud.controller;

import org.apache.poi.hssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import xinggq.university.aircloud.service.DataService;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.List;
import java.util.Map;

/**
 * Created by xinggq on 17-4-20.
 *
 * 数据控制器
 * 只用于返回json数据
 */

@RestController
@RequestMapping("/data")
public class DataController {

    @Autowired
    DataService dataService;

    /**
     * 获取当前数据
     * @return
     */
    @RequestMapping("/current/{type}")
    public String getCurrentData(@PathVariable("type") String type){

        return dataService.getCurrentDate(type);
    }

    @RequestMapping("/history/{type}")
    public String getHistoryData(@PathVariable("type") String type){

        return dataService.getHistoryData(type);
    }



}
