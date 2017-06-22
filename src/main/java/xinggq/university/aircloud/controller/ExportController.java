package xinggq.university.aircloud.controller;

import org.apache.poi.hssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
 * Created by xinggq on 17-6-22.
 */
@Controller
@RequestMapping("/data")
public class ExportController {

    @Autowired
    DataService dataService;

    @RequestMapping("/export/{type}/{data}")
    public void exportHistoryData(@PathVariable("type") String type, @PathVariable("data") String data, HttpServletResponse response, HttpServletRequest request){

        String fileName;
        //查询数据，导出excel表格
        List<Map<String,Object>> list = dataService.export(type,data);

        //创建Excel
        HSSFWorkbook book = new HSSFWorkbook();
        HSSFSheet sheet = book.createSheet("sheet1");//在当前工作簿创建Sheet
        //设置sheet的名字【解决中文乱码问题】
        book.setSheetName(0, "sheet1");
        //创建行
        HSSFRow rowHead = sheet.createRow(0);
        //在行上创建列
        HSSFCell cell = rowHead.createCell((short) 0);
        cell.setCellValue("温度");

        HSSFCell cell2 = rowHead.createCell((short) 1);
        cell2.setCellValue("灰尘浓度");

        HSSFCell cell3 = rowHead.createCell((short) 2);
        cell3.setCellValue("空气质量");

        HSSFCell cell4 = rowHead.createCell((short) 3);
        cell4.setCellValue("可燃气体浓度");

        HSSFCell cell5 = rowHead.createCell((short) 4);
        cell5.setCellValue("气压");

        HSSFCell cell6 = rowHead.createCell((short) 5);
        cell6.setCellValue("湿度");

        HSSFCell cell7 = rowHead.createCell((short) 6);
        cell7.setCellValue("采集时间");

        HSSFRow newRow;
        HSSFCell cellNew;
        Map<String,Object> map;

        HSSFDataFormat dataFormat = book.createDataFormat();//在工作簿上创建数据格式类
        short format = dataFormat.getFormat("yyyy-MM-dd HH:mm:ss");//取得格式化类型中的id

        HSSFCellStyle style = book.createCellStyle();//在工作簿创建样式
        style.setDataFormat(format);//设置样式中的格式

        String wendu;
        String huichengnongdu;
        String kongqizhiliang;
        String keranqitinongdu;
        String qiya;
        String shidu;
        String time1;

        for(int i=0;i<list.size();i++){
            //创建一个新行
            newRow = sheet.createRow(1+i);
            map = list.get(i);

            wendu = (String)map.get("wendu");
            cellNew = newRow.createCell((short) 0);
            cellNew.setCellValue(wendu);

            huichengnongdu = (String)map.get("huichengnongdu");
            cellNew = newRow.createCell((short) 1);
            cellNew.setCellValue(huichengnongdu);

            kongqizhiliang = (String)map.get("kongqizhiliang");
            cellNew = newRow.createCell((short) 2);
            cellNew.setCellValue(kongqizhiliang);

            keranqitinongdu = (String)map.get("keranqitinongdu");
            cellNew = newRow.createCell((short) 3);
            cellNew.setCellValue(keranqitinongdu);

            qiya = (String)map.get("qiya");
            cellNew = newRow.createCell((short) 4);
            cellNew.setCellValue(qiya);

            shidu = (String)map.get("shidu");
            cellNew = newRow.createCell((short) 5);
            cellNew.setCellValue(shidu);

            //在行上创建列[日期]
            time1 = map.get("time1").toString();
            cellNew = newRow.createCell((short) 6);
            cell2.setCellStyle(style);
            cellNew.setCellValue(time1);
        }
        fileName= request.getRealPath("/")+ File.separator+type+data+".xls";
        try {
            FileOutputStream out = new FileOutputStream(fileName);
            book.write(out);
            out.close();
        } catch (IOException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }

        //下载Excel
        try {
            ServletOutputStream out = response.getOutputStream();

            HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(new File(fileName)));


            ByteArrayOutputStream buffer = new ByteArrayOutputStream();

            workbook.write(buffer);
            response.setContentType("application/vnd.ms-excel");
            response.setContentLength(buffer.size());
            response.setHeader("Content-Disposition", "attachment; filename="+type+data+".xls");
            response.setHeader("Pragma", "public");
            response.setHeader("Cache-Control", "max-age=0");

            out.write(buffer.toByteArray());
            buffer.flush();
            out.flush();
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }
}
