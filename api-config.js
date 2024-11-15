export default {

    // baseUrl: '/api/his7/reg/websrv',
    // baseUrl2: '/api/his7/reg/websrv2', // for appointmentTime
    // baseUrl_1: '/api/his7/reh/schedule/RehScheWeb',// for new tabs
    // tokenUrl: '/api/oauth/Login',
    // emrUrl: '/api/his7/emr/comm/EmrLisResult/getLisResultXML',

    // for freelancer
    baseUrl: 'http://192.168.1.155:30000/api/his7/reg/websrv', // for original tabs
    baseUrl2: 'http://192.168.1.155:30000/api/his7/reg/websrv2', // for appointmentTime
    baseUrl_1: 'http://192.168.1.155:30000/api/his7/reh/schedule/RehScheWeb',// for new tabs
    tokenUrl: 'http://192.168.1.155:30000/api/oauth/Login',
    emrUrl: 'http://192.168.1.155:30000/api/his7/emr/comm/EmrLisResult/getLisResultXML',

    // for local
    // baseUrl: 'http://localhost:30000/api/his7/reg/websrv',
    // baseUrl2: 'http://localhost:30000/api/his7/reg/websrv2', // for appointmentTime
    // baseUrl_1: 'http://localhost:30000/api/his7/reh/schedule/RehScheWeb',// for new tabs
    // tokenUrl: 'http://localhost:30000/api/oauth/Login',
    // emrUrl: 'http://localhost:30000/api/his7/emr/comm/EmrLisResult/getLisResultXML',

    // baseUrl: 'http://192.168.1.237:30000/api/his7/reg/websrv',
    commonParams: {
        isPtModule: true,
        multiTenancy: true,
        // for freelancer
        // tenantId: '39583753',
        // tenantDbConnectionString: 'clinic_323',
        // for test
        tenantId: '39583753',
        tenantDbConnectionString: 'saas_tenant_39583753',
        // for exhibition
        // tenantId: '83774487',
        // tenantDbConnectionString: 'jnpf_tenant_32gt17ai16fw',
        // drdirk
        // tenantId: '27323234',
        // tenantDbConnectionString: 'saas_tenant_27323234',
        // genuine
        // tenantId: '3535021510',
        // tenantDbConnectionString: 'saas_tenant_3535021510',
        // jiajian
        // multiTenancy: false,
        // tenantId: '0424611188',
        // tenantDbConnectionString: 'saas_tenant_0424611188',
        tokenInfo: {
            passwords:{
                dev: 'e10adc3949ba59abbe56e057f20f883e',
                staging: '6c8aad71ff0e93dcddc7361a9d2d2ada',
                master: '6c8aad71ff0e93dcddc7361a9d2d2ada',
            },
            clientId: 'admin',
            clientSecret: '123456',
            scope: 'all',
            grantType: 'password',
            origin: 'password',
        }
    },
    // webUrl: 'https://thegenuineclinic.smartclinics.tw',
    // webUrl: 'https://drdirkclinicapp.smartclinics.tw',
    // webUrl: 'https://jiajian.smartclinics.tw',
    webUrl: 'https://clinicdev.smartclinics.tw',
    // webUrl: 'https://smhcdevelop.smartclinics.tw',
    // webUrl: 'http://webrehclinic.local',
};
