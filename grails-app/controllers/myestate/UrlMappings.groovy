package myestate

class UrlMappings {

    static mappings = {

        group("/public") {
            "/app/**"(controller: 'react', method: 'GET', action: 'index')
            "/secure/app/**"(controller: 'react', method: 'GET', action: 'index')
        }

        group("/public/secure/services"){
            "/test/**"(controller: 'test', method: 'GET', action: 'index')
        }

    }
}
