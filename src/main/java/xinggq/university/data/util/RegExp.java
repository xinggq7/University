package xinggq.university.data.util;

import com.sun.org.apache.regexp.internal.RE;

import java.util.regex.Pattern;

/**
 * Created by xinggq on 17-5-8.
 * 正则表达式验证类，用来验证数据
 */
public class RegExp {

    //定义一个验证规则,以一个或多个0开头,以一个或多个0结尾
    //该正则表达式分为两部分,|之后为匹配第一个数据是否权威0,|之后配匹配第一个和最后一个之间的数据是否为0,因为最后一个
    //是日期,而且是后台程序加上去的,所以肯定不会为0,所以没有必要验证
    public static final String REGEX1 = "(.*(,0+\\.0+,).*)|(^0+\\.0+,.*)";

    /**
     * 判断数据中是否包含错误数据
     * @param data 数据
     * @return true表示有错误数据,false表示没有
     */
    public static boolean isEffective(String data) {
        return Pattern.matches(RegExp.REGEX1, data);
    }
//
//    public static void main(String[] args) {
//        System.out.println(RegExp.isEffective("0.00,123.312,1231"));
//    }
}
