
<?php
// router.php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
	return false; // Serve the requested resource as-is
} else {
	echo "<p>Thanks for using php-server :)</p>";
}
?>