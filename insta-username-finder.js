
const isAvailable = async (username) => {
    var myHeaders = new Headers();
    myHeaders.append("authority", "accountscenter.instagram.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("cookie", "ig_did=2E09E120-B96A-4D29-B0FD-577B0EB6FF5B; ig_nrcb=1; mid=Y7LTnAAEAAEPWTM0gPNJKV2CdQUE; datr=IAW8Y7dk0ku7aaJUi3Oly1uk; dpr=1.7999999523162842; shbid=\"9069\\05449997318092\\0541708164217: 01f7abbc2009796ba427c61f5e4b9e3029fa332c9ea59395b232a1e2092d78d77b19b09d\"; shbts=\"1676628217\\05449997318092\\0541708164217:01f7183812db007b7f57d39fc8fcbd3a1bef73f8d632ac56ccaec08633ad9ee9308a32e7\"; ds_user_id=57642534188; sessionid=57642534188%3AoLZ8ww2W2pAxx3%3A12%3AAYcavXpqeVUngoJv3Q58PDdVKTpSl083YUvP6q2-Gw; csrftoken=e13uNeh5uJ6yKwl5JLENfFdf9dqHiz55; rur=\"EAG\\05457642534188\\0541708368329:01f79f33d216a2b9c3c9d4272531964a943688d8193db1873cef78993cbd33fb729fdfe3\"");
    myHeaders.append("origin", "https://accountscenter.instagram.com");
    myHeaders.append("referer", "https://accountscenter.instagram.com/profiles/17841457785645316/username/?entrypoint=fb_account_center");
    myHeaders.append("sec-ch-prefers-color-scheme", "dark");
    myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36");
    myHeaders.append("viewport-width", "1000");
    myHeaders.append("x-fb-friendly-name", "useFXIMUsernameValidatorBaseQuery");
    myHeaders.append("x-fb-lsd", "sOo8UmFzKUZIdb-kZLle-t");
    myHeaders.append("x-ig-app-id", "936619743392459");

    var urlencoded = new URLSearchParams();
    urlencoded.append("av", "17841457785645316");
    urlencoded.append("__user", "0");
    urlencoded.append("__a", "1");
    urlencoded.append("__dyn", "7xeUmwlE7ibwKBWo2vwAxu13w8CewSwMwNw9G2S0im3y4o0B-q1ew65xO0FE2awt81sbzo5-0Bo7O2l0Fwqo31wnEfovw8O4U2zxe2Gew9O22362W2K0zK1swa-7-0iK2S3qazo7u0zEiwaG1bwzwTwNwbO7EeE");
    urlencoded.append("__csr", "gll9Y9THidlIBpG-ytvuTqZaXCWluJ5BC-iingVUiVrBRy7iGHhFoy8ybiG4o01e1Ejjgpgucdwi8do7O4O344205pwa0yCy_xZGVGypWGuGxi4qBGGyVQbwBwSpgB5zWia2Wii64dCyEgxG48kguG0IxQMCWgOHguggjgvDwKBwnk2q0aDw4uweSmfyfw4XwIybwo8-eCfxSbwB8O0");
    urlencoded.append("__req", "2r");
    urlencoded.append("__hs", "19407.HYP:accounts_center_pkg.2.1.0.0.0");
    urlencoded.append("dpr", "2");
    urlencoded.append("__ccg", "EXCELLENT");
    urlencoded.append("__rev", "1006984962");
    urlencoded.append("__s", "4plwip:oxihn1:98g2i7");
    urlencoded.append("__hsi", "7201940011065323400");
    urlencoded.append("__comet_req", "24");
    urlencoded.append("fb_dtsg", "NAcMJPfY_gySn3RQfysVVoV3UvmX1CfZ7dOPAZD3VDcRDszAglzOOIA:17843669410156967:1676832189");
    urlencoded.append("jazoest", "26324");
    urlencoded.append("lsd", "sOo8UmFzKUZIdb-kZLle-t");
    urlencoded.append("__spin_r", "1006984962");
    urlencoded.append("__spin_b", "trunk");
    urlencoded.append("__spin_t", "1676832328");
    urlencoded.append("fb_api_caller_class", "RelayModern");
    urlencoded.append("fb_api_req_friendly_name", "useFXIMUsernameValidatorBaseQuery");
    urlencoded.append("variables", JSON.stringify({ "action_source": "EDIT", "identity_ids": ["17841457785645316"], "username": username, "included_app_validations": [] }));
    urlencoded.append("server_timestamps", "true");
    urlencoded.append("doc_id", "5278834025554321");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    let response = await fetch("https://accountscenter.instagram.com/api/graphql/", requestOptions);

    return (await response.json()).data.fx_identity_management.validate_username_v4;
};

isAvailable('codepokhriyal').then(console.log).catch(console.error);
