$long_url = urlencode('https://rivaldam.blogspot.com/');
$api_token = 'd8da0841a860bbe4d6a9dd1f385ea6b894f2f58a';
$api_url = "https://safelinkblogger.com/api?api={$api_token}&url={$long_url}&alias=CustomAlias";
$result = @json_decode(file_get_contents($api_url),TRUE);
if($result["status"] === 'error') {
 echo $result["message"];
} else {
 echo $result["shortenedUrl"];
}
