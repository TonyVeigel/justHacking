package starter

class UrlMappings {

    static mappings = {
        "/starter/**"(view:"/react/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
