import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Web Pages
import Home from '../pages/Web/Home'
import ContentPages from '../pages/Web/Content/index'
//Admin Pages
import PrivateRoute from "./privateRoute";
import AuthRoute from "./authRoute";
import Login from '../pages/Admin/Auth/login'
import Dashboard from '../pages/Admin/Dashboard'
import ProfileSettings from '../pages/Admin/ProfileSettings'
/**** CKS ROUTE *****/
import ApplicationContractor from '../pages/Admin/Contractor'
import ApplicationContractorAdd from '../pages/Admin/Contractor/add'
import ApplicationContractorEdit from '../pages/Admin/Contractor/edit'
import ApplicationContractorView from '../pages/Admin/Contractor/view'

/**** CKS ROUTE END*****/
import ApplicationUser from '../pages/Admin/Users'
import ApplicationUserEdit from '../pages/Admin/Users/edit'
import ApplicationUserView from '../pages/Admin/Users/view'
import ApplicationContent from '../pages/Admin/ApplicationContent'
import ApplicationContentEdit from '../pages/Admin/ApplicationContent/edit'
import ApplicationContentAdd from '../pages/Admin/ApplicationContent/add'
import ApplicationSettings from '../pages/Admin/ApplicationSettings'
import ApplicationCategoryEdit from '../pages/Admin/ApplicationCategory/edit'
import ApplicationCategoryAdd from '../pages/Admin/ApplicationCategory/add'
import ApplicationCategory from '../pages/Admin/ApplicationCategory'
import ApplicationResourceEdit from '../pages/Admin/ApplicationResource/edit'
import ApplicationResourceAdd from '../pages/Admin/ApplicationResource/add'
import ApplicationmportResource from '../pages/Admin/ApplicationResource/resourcesimp'
import ApplicationResource from '../pages/Admin/ApplicationResource'
import ApplicationQuestion from '../pages/Admin/ApplicationQuestion'
import ApplicationQuestionEdit from '../pages/Admin/ApplicationQuestion/edit'
import ApplicationQuestionAdd from '../pages/Admin/ApplicationQuestion/add'

import ChangePassword from "../pages/Admin/ChangePassword";

const Loading = ()=>{
    console.log('Content')
    return (
        <div className="pt-3 text-center">
            <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
    )
};


function App() {
    return (
        <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/content/:slug" element={<ContentPages />}/>   
        <Route exact path="/admin/login/zekkmdvhkm" element={<AuthRoute><Login /></AuthRoute>} />
        <Route exact path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route exact path="/admin/profilesettings" element={<PrivateRoute><ProfileSettings /></PrivateRoute>}/>
        <Route exact path="/admin/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>}/>
        <Route exact path="/admin/application-setting" element={<PrivateRoute><ApplicationSettings /></PrivateRoute>}/>
        <Route exact path="/admin/content" element={<PrivateRoute><ApplicationContent /></PrivateRoute>}/>
        <Route exact path="/admin/content/edit/:slug?" element={<PrivateRoute><ApplicationContentEdit /></PrivateRoute>}/>
        <Route exact path="/admin/content/add" element={<PrivateRoute><ApplicationContentAdd /></PrivateRoute>}/>

        <Route exact path="/admin/contractor" element={<PrivateRoute><ApplicationContractor /></PrivateRoute>}/>
        <Route exact path="/admin/contractor/add" element={<PrivateRoute><ApplicationContractorAdd /></PrivateRoute>}/>
        <Route exact path="/admin/contractor/edit/:slug?" element={<PrivateRoute><ApplicationContractorEdit /></PrivateRoute>}/>
        <Route exact path="/admin/contractor/view/:slug?" element={<PrivateRoute><ApplicationContractorView /></PrivateRoute>}/>
        



        <Route exact path="/admin/users" element={<PrivateRoute><ApplicationUser /></PrivateRoute>}/>
        <Route exact path="/admin/users/edit/:slug?" element={<PrivateRoute><ApplicationUserEdit /></PrivateRoute>}/>
        <Route exact path="/admin/users/view/:slug?" element={<PrivateRoute><ApplicationUserView /></PrivateRoute>}/>
        <Route exact path="/admin/application-category" element={<PrivateRoute><ApplicationCategory /></PrivateRoute>}/>
        <Route exact path="/admin/application-category/add" element={<PrivateRoute><ApplicationCategoryAdd /></PrivateRoute>}/>
        <Route exact path="/admin/application-category/edit/:slug?" element={<PrivateRoute><ApplicationCategoryEdit /></PrivateRoute>}/>
        <Route exact path="/admin/application-resource/edit/:slug?" element={<PrivateRoute><ApplicationResourceEdit /></PrivateRoute>}/>
        <Route exact path="/admin/application-resource/add" element={<PrivateRoute><ApplicationResourceAdd /></PrivateRoute>}/>
        <Route exact path="/admin/application-resource/resourcesimp" element={<PrivateRoute><ApplicationmportResource /></PrivateRoute>}/>
        <Route exact path="/admin/application-resource" element={<PrivateRoute><ApplicationResource /></PrivateRoute>}/>
        <Route exact path="/admin/application-questions" element={<PrivateRoute><ApplicationQuestion /></PrivateRoute>}/>
        <Route exact path="/admin/application-questions/edit/:slug?" element={<PrivateRoute><ApplicationQuestionEdit /></PrivateRoute>}/>
        <Route exact path="/admin/application-questions/add" element={<PrivateRoute><ApplicationQuestionAdd /></PrivateRoute>}/>
        </Routes>
    );
}

export default App;
