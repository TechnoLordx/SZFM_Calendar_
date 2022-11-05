@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist D:\xamp\hypersonic\scripts\ctl.bat (start /MIN /B D:\xamp\server\hsql-sample-database\scripts\ctl.bat START)
if exist D:\xamp\ingres\scripts\ctl.bat (start /MIN /B D:\xamp\ingres\scripts\ctl.bat START)
if exist D:\xamp\mysql\scripts\ctl.bat (start /MIN /B D:\xamp\mysql\scripts\ctl.bat START)
if exist D:\xamp\postgresql\scripts\ctl.bat (start /MIN /B D:\xamp\postgresql\scripts\ctl.bat START)
if exist D:\xamp\apache\scripts\ctl.bat (start /MIN /B D:\xamp\apache\scripts\ctl.bat START)
if exist D:\xamp\openoffice\scripts\ctl.bat (start /MIN /B D:\xamp\openoffice\scripts\ctl.bat START)
if exist D:\xamp\apache-tomcat\scripts\ctl.bat (start /MIN /B D:\xamp\apache-tomcat\scripts\ctl.bat START)
if exist D:\xamp\resin\scripts\ctl.bat (start /MIN /B D:\xamp\resin\scripts\ctl.bat START)
if exist D:\xamp\jetty\scripts\ctl.bat (start /MIN /B D:\xamp\jetty\scripts\ctl.bat START)
if exist D:\xamp\subversion\scripts\ctl.bat (start /MIN /B D:\xamp\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist D:\xamp\lucene\scripts\ctl.bat (start /MIN /B D:\xamp\lucene\scripts\ctl.bat START)
if exist D:\xamp\third_application\scripts\ctl.bat (start /MIN /B D:\xamp\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist D:\xamp\third_application\scripts\ctl.bat (start /MIN /B D:\xamp\third_application\scripts\ctl.bat STOP)
if exist D:\xamp\lucene\scripts\ctl.bat (start /MIN /B D:\xamp\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist D:\xamp\subversion\scripts\ctl.bat (start /MIN /B D:\xamp\subversion\scripts\ctl.bat STOP)
if exist D:\xamp\jetty\scripts\ctl.bat (start /MIN /B D:\xamp\jetty\scripts\ctl.bat STOP)
if exist D:\xamp\hypersonic\scripts\ctl.bat (start /MIN /B D:\xamp\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist D:\xamp\resin\scripts\ctl.bat (start /MIN /B D:\xamp\resin\scripts\ctl.bat STOP)
if exist D:\xamp\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT D:\xamp\apache-tomcat\scripts\ctl.bat STOP)
if exist D:\xamp\openoffice\scripts\ctl.bat (start /MIN /B D:\xamp\openoffice\scripts\ctl.bat STOP)
if exist D:\xamp\apache\scripts\ctl.bat (start /MIN /B D:\xamp\apache\scripts\ctl.bat STOP)
if exist D:\xamp\ingres\scripts\ctl.bat (start /MIN /B D:\xamp\ingres\scripts\ctl.bat STOP)
if exist D:\xamp\mysql\scripts\ctl.bat (start /MIN /B D:\xamp\mysql\scripts\ctl.bat STOP)
if exist D:\xamp\postgresql\scripts\ctl.bat (start /MIN /B D:\xamp\postgresql\scripts\ctl.bat STOP)

:end

