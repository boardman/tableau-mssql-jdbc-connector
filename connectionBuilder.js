(function dsbuilder(attr) {
    var keystorePath = "@connector-resources/always_encrypted.jks";
    var urlBuilder = "jdbc:sqlserver://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + 
                    ";databaseName=" + attr[connectionHelper.attributeDatabase] + 
                    ";encrypt=true;columnEncryptionSetting=Enabled" +
                    ";keyStoreAuthentication=JavaKeyStorePassword" +
                    ";certStoreProvider=SunMSCAPI" +
                    ";keyStoreLocation=" + keystorePath +
                    ";keyStoreSecret=password" +
                    ";trustServerCertificate=true";

    return [urlBuilder];
})
