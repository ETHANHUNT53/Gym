package com.gymapp.di;


import com.gymapp.service.SignupService;
import com.gymapp.service.SigninService;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.gymapp.service.UpdateService;
import software.amazon.awssdk.services.cognitoidentityprovider.CognitoIdentityProviderClient;
import dagger.Module;
import dagger.Provides;

import javax.inject.Singleton;

@Module
public class ServiceModule {

    @Provides
    @Singleton
    public SignupService provideSignupService(CognitoIdentityProviderClient cognitoClient, AmazonDynamoDB dynamoDB) {
        return new SignupService(cognitoClient, dynamoDB);
    }

    @Provides
    @Singleton
    public SigninService provideSigninService(CognitoIdentityProviderClient cognitoClient) {
        return new SigninService(cognitoClient);
    }

    @Provides
    @Singleton
    public UpdateService provideUpdateService(AmazonDynamoDB dynamoDB) {
        return new UpdateService(dynamoDB);

    }




}
