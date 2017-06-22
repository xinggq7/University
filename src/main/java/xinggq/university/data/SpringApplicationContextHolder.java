package xinggq.university.data;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import static org.thymeleaf.util.Validate.notEmpty;

/**
 * Created by xinggq on 17-5-9.
 *
 * 解决多线程中不能使用spring注入的问题，手动注入
 */
@Configuration
public class SpringApplicationContextHolder implements ApplicationContextAware {


    private static ApplicationContext context;

    @Override
    public void  setApplicationContext(ApplicationContext context) throws BeansException {
        SpringApplicationContextHolder.context = context;
    }


    public static Object  getSpringBean(String beanName) {
        notEmpty(beanName, "bean name is required");
        return SpringApplicationContextHolder.context == null ? null : SpringApplicationContextHolder.context.getBean(beanName);
    }
}

