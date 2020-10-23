```
keytool -genkey -alias shopkey -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore C:\Users\admin\Desktop\work\shopkey.p12
keytool -list -keystore server.keystore  -storepass 2469220
keytool --exportcert -rfc -keystore   server.keystore -alias serverkey -storepass 2469220
```

