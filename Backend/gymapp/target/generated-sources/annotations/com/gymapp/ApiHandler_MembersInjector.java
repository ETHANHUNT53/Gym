package com.gymapp;

import com.gymapp.service.CognitoService;
import com.gymapp.service.SigninService;
import com.gymapp.service.SignupService;
import com.gymapp.service.UpdateService;
import dagger.MembersInjector;
import dagger.internal.DaggerGenerated;
import dagger.internal.InjectedFieldSignature;
import dagger.internal.QualifierMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@QualifierMetadata
@DaggerGenerated
@Generated(
    value = "dagger.internal.codegen.ComponentProcessor",
    comments = "https://dagger.dev"
)
@SuppressWarnings({
    "unchecked",
    "rawtypes",
    "KotlinInternal",
    "KotlinInternalInJava"
})
public final class ApiHandler_MembersInjector implements MembersInjector<ApiHandler> {
  private final Provider<SignupService> signupServiceProvider;

  private final Provider<SigninService> signinServiceProvider;

  private final Provider<CognitoService> cognitoServiceProvider;

  private final Provider<UpdateService> updateServiceProvider;

  public ApiHandler_MembersInjector(Provider<SignupService> signupServiceProvider,
      Provider<SigninService> signinServiceProvider,
      Provider<CognitoService> cognitoServiceProvider,
      Provider<UpdateService> updateServiceProvider) {
    this.signupServiceProvider = signupServiceProvider;
    this.signinServiceProvider = signinServiceProvider;
    this.cognitoServiceProvider = cognitoServiceProvider;
    this.updateServiceProvider = updateServiceProvider;
  }

  public static MembersInjector<ApiHandler> create(Provider<SignupService> signupServiceProvider,
      Provider<SigninService> signinServiceProvider,
      Provider<CognitoService> cognitoServiceProvider,
      Provider<UpdateService> updateServiceProvider) {
    return new ApiHandler_MembersInjector(signupServiceProvider, signinServiceProvider, cognitoServiceProvider, updateServiceProvider);
  }

  @Override
  public void injectMembers(ApiHandler instance) {
    injectSignupService(instance, signupServiceProvider.get());
    injectSigninService(instance, signinServiceProvider.get());
    injectCognitoService(instance, cognitoServiceProvider.get());
    injectUpdateService(instance, updateServiceProvider.get());
  }

  @InjectedFieldSignature("com.gymapp.ApiHandler.signupService")
  public static void injectSignupService(ApiHandler instance, SignupService signupService) {
    instance.signupService = signupService;
  }

  @InjectedFieldSignature("com.gymapp.ApiHandler.signinService")
  public static void injectSigninService(ApiHandler instance, SigninService signinService) {
    instance.signinService = signinService;
  }

  @InjectedFieldSignature("com.gymapp.ApiHandler.cognitoService")
  public static void injectCognitoService(ApiHandler instance, CognitoService cognitoService) {
    instance.cognitoService = cognitoService;
  }

  @InjectedFieldSignature("com.gymapp.ApiHandler.updateService")
  public static void injectUpdateService(ApiHandler instance, UpdateService updateService) {
    instance.updateService = updateService;
  }
}
