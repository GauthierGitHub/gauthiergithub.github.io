<?php
$contents = file_get_contents(__DIR__ .'/gitpull.sh');
echo shell_exec($contents);
?>