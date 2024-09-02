package com.gymapp.di;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.gymapp.service.UpdateService;
import dagger.internal.DaggerGenerated;
import dagger.internal.Factory;
import dagger.internal.Preconditions;
import dagger.internal.QualifierMetadata;
import dagger.internal.ScopeMetadata;
import javax.annotation.processing.Generated;
import javax.inject.Provider;

@ScopeMetadata("javax.inject.Singleton")
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
public final class ServiceModule_ProvideUpdateServiceFactory implements Factory<UpdateService> {
  private final ServiceModule module;

  private final Provider<AmazonDynamoDB> dynamoDBProvider;

  public ServiceModule_ProvideUpdateServiceFactory(ServiceModule module,
      Provider<AmazonDynamoDB> dynamoDBProvider) {
    this.module = module;
    this.dynamoDBProvider = dynamoDBProvider;
  }

  @Override
  public UpdateService get() {
    return provideUpdateService(module, dynamoDBProvider.get());
  }

  public static ServiceModule_ProvideUpdateServiceFactory create(ServiceModule module,
      Provider<AmazonDynamoDB> dynamoDBProvider) {
    return new ServiceModule_ProvideUpdateServiceFactory(module, dynamoDBProvider);
  }

  public static UpdateService provideUpdateService(ServiceModule instance,
      AmazonDynamoDB dynamoDB) {
    return Preconditions.checkNotNullFromProvides(instance.provideUpdateService(dynamoDB));
  }
}
