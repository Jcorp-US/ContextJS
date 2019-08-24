# ContextJS
Custom Context Menus made easy with no dependancies

Created for PlatformLMS by the team at Jcorp. MIT License

Sample Usage: 
 ```HTML  
   <div id="context" style="display:none;left:0;top:0;">
      <span onclick="changePage(goDashboard(), 'Dashboard', '/dashboard');">Dashboard</span>
      <span onclick="changePage(goProfile(), 'Account Information', '/account/info');">Account</span>
      <span onclick="window.location.assign('https://platformlms.org/support/');">Support/Feedback</span>
      <span onclick="changePage(goAboutPage(), 'About Platform', '/about');">About Platform</span>
      <span onclick="changePage(goodBye(), 'Logout', '/logout/user');">Logout</span>
   </div>
```
