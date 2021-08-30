import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import AdminLayout from "../../layouts/AdminLayout";
class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <AdminLayout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </AdminLayout>
      </BrowserRouter>
    );
  }
}
export default AppRoutes;
