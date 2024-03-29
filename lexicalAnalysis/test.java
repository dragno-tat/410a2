package com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl;

// stub
        /*
        ssjsj
        sjsjsj
        sjjs
        */
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.impl.parameters.DefaultFizzBuzzUpperLimitParameter;
import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.interfaces.FizzBuzz;
import com.seriouscompany.business.java.fizzbuzz.packagenamingpackage.interfaces.parameters.FizzBuzzUpperLimitParameter;

public final class Main {

	public static void main(final String[] args) {
		final ApplicationContext context = new ClassPathXmlApplicationContext(Constants.SPRING_XML);
		final FizzBuzz myFizzBuzz = (FizzBuzz) context.getBean(Constants.STANDARD_FIZZ_BUZZ);
		final FizzBuzzUpperLimitParameter fizzBuzzUpperLimit = new DefaultFizzBuzzUpperLimitParameter();
        myFizzBuzz.fizzBuzz(fizzBuzzUpperLimit.obtainUpperLimitValue());
        //
        /*
        sjsjsjjs
        sjsjs
        //sjsjjjsj
        /*sjsjj
        */
        ((ConfigurableApplicationContext) context).close();
    }

    //
    /*
    sjsjsjjs
    //sjsjs
    //sjsjjjsj
    sjsjj
    */
    private static void a() {
    } 
}