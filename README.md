# :100: React Native Project Structure

Configuração inicial de um projeto React Native que uso no meu dia a dia. 

# :wrench: Configuração

* Instale o **[Node](https://nodejs.org/en/download/ "Clique para baixar o Node!")** na sua máquina e verifique pelo comando abaixo:
```
~ node --version
```

* Verificação do **NPM** ou **[Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable "Clique para baixar o Yarn!")** na sua máquina:
````
~ npm --version

~ yarn --version
````

* Instale o **Expo CLI** na sua máquina:
````
~ npm install expo-cli -g

~ yarn add expo-cli -g
```` 

* Na raíz do projeto `react-native-project-structure/` instale as dependencias do projeto:
````
~ npm install

~ yarn install
````

* Rode o comando abaixo para iniciar o projeto:
```
~ npm start

~ yarn start
```

# :rocket: Build de Produção com o Expo CLI

* Comando para gerar a **keystore**:
```
~ keytool -genkey -v -keystore <KEY_NAME>.keystore -alias <ALIAS_NAME> -keyalg RSA -keysize 2048 -validity 35000
```

* Comando para gerar o **certificado** da keystore:
```
~ keytool -export -rfc -alias <ALIAS_NAME> -file <CERTIFICATE_NAME>.pem -keystore <KEY_NAME>.keystore
```

* Comando para gerar o APK / App Bundler com o Expo:
```
~ expo build:android
```

# :rocket: Build de Produção com o React Native

* Comando para ejetar o projeto do Expo:
```
~ expo eject

~ npm run eject

~ yarn eject
```

* Coloque o arquivo **<KEY_NAME>.keystore** dentro da pasta `android/app`

* No arquivo `android/gradle.properties` cole o código abaixo:
```
MYAPP_UPLOAD_STORE_FILE=<KEY_NAME>.keystore
MYAPP_UPLOAD_KEY_ALIAS=<ALIAS_NAME>
MYAPP_UPLOAD_STORE_PASSWORD=<KEY_PASSWORD>
MYAPP_UPLOAD_KEY_PASSWORD=<KEY_PASSWORD>
```

* No arquivo `android/app/build.gradle` cole o código abaixo:
```
signingConfigs {
  release {
    if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
	  storeFile file(MYAPP_UPLOAD_STORE_FILE)
	  storePassword MYAPP_UPLOAD_STORE_PASSWORD
	  keyAlias MYAPP_UPLOAD_KEY_ALIAS
	  keyPassword MYAPP_UPLOAD_KEY_PASSWORD
	}
  }

  buildTypes {
    release {
	  signingConfig signingConfigs.release
	}
  }
}
```

* Entre na pasta `android/` para gerar o:
  * App Bundle: `gradlew bundleRelease`;
  * APK: `gradlew assembleRelease`;

* Configuração adicional em caso de error em alguma dependencia do **@react-native-community**:
	* Na raiz do projeto crie o arquivo `react-native.config.js` e cole o código abaixo:
	```
	module.exports = {
	  dependencies: {
	    '@react-native-community/<INCORRECT_DEPENDENCY>': {
		  platforms: {
		    android: null, // disable Android platform, other platforms will still autolink if provided
		  },
		}
	  }
	};
	```

# :pushpin: Informações

:copyright: *Névio Costa Magagnin* - Todos os direitos reservados.
