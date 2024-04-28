package com.example.demo;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;


@MapperScan("com.example.demo") //mapper.java파일들이 존재하는 디렉토리
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	 @Bean //이 메서드를 객체생성해줘야 한다.
	 SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {

        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource); //의존성 주입 -servlet-context에서 해주는 작업

        Resource[] res = new PathMatchingResourcePatternResolver()
                .getResources("classpath:mapper/*.xml");//src/main/java/resorces/mapper/쿼리xml파일이 있는 위치임.  쿼리 호출 시 해당 하는 파일이 없는 경우 Invalid bound statement (not found): com.example.demo.RestService.getYeboList오류 남

        sessionFactory.setMapperLocations(res);

        return sessionFactory.getObject();
        //.xml 형태의 모든 파일을 받기때문에 배열로 받는다.
        //만약 한가지만 받으면 배열로[] 받을 필요가 없다.
    }

}
