function CreateDeliveryOrder() {

    const Target = localStorage.getItem('ServiceTarget');
    const Session = JSON.parse(sessionStorage.getItem('CurrentSessionObject'));

    const Params = new URLSearchParams({
        UserName: Session.UserInfo.UserName,
        Mail: Session.UserInfo.Email,
        Name: Session.UserInfo.Name,
        ProfilePhoto: Session.UserInfo.ProfilePhoto
    });

    const UrlWithParams = `${Target}?${Params.toString()}`;

    fetch(UrlWithParams, {
        method: "GET",
        headers: {
            "Content-type": "Application/x-www-form-urlencoded"
        }
    })
    .then(Request => Request.text())
    .then(Returned => {

        const PostRedirectPath = localStorage.getItem('PostRedirectPath');

        App.location.href = PostRedirectPath;

    })
    .catch(ErrDescripter =>{

        console.error(`Ocurrió un error al procesar com.delivery:15-20L, ErrDescripter:{${ErrDescripter}}`)

    })


}
