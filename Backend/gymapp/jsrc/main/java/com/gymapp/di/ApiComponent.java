package com.gymapp.di;


import com.gymapp.ApiHandler;
import dagger.Component;

import javax.inject.Singleton;

@Singleton
@Component(modules = {ApiModule.class, ServiceModule.class})
public interface ApiComponent {
    void inject(ApiHandler apiHandler);
}
