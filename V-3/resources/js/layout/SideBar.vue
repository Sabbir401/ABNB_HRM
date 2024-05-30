<script>

</script>
<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a class="sidebar-brand brand-logo" href="index.html"><img src="https://admin.artisanbn.com/storage/company/artisan-banner.png" alt="logo" /></a>
            <a class="sidebar-brand brand-logo-mini" href="index.html"><img src="https://admin.artisanbn.com/storage/company/artisan-logo.png"
                    alt="logo" /></a>
        </div>
        <ul class="nav">
            <li class="nav-item profile">
                <div class="profile-desc">
                    <div class="profile-pic">
                        <div class="count-indicator">
                            <img class="img-xs rounded-circle " src="./../assets/images/faces/ArtisanLogo.jpg" alt="">
                            <span class="count bg-success"></span>
                        </div>
                        <div class="profile-name">
                            <h5 class="mb-0 font-weight-normal">Artisan</h5>
                            <span>HR</span>
                        </div>
                    </div>
                    <a href="#" id="profile-dropdown" data-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
                    <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                        aria-labelledby="profile-dropdown">
                        <a href="#" class="dropdown-item preview-item">
                            <div class="preview-thumbnail">
                                <div class="preview-icon bg-dark rounded-circle">
                                    <i class="mdi mdi-settings text-primary"></i>
                                </div>
                            </div>
                            <div class="preview-item-content">
                                <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item preview-item">
                            <div class="preview-thumbnail">
                                <div class="preview-icon bg-dark rounded-circle">
                                    <i class="mdi mdi-onepassword  text-info"></i>
                                </div>
                            </div>
                            <div class="preview-item-content">
                                <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                            </div>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item preview-item">
                            <div class="preview-thumbnail">
                                <div class="preview-icon bg-dark rounded-circle">
                                    <i class="mdi mdi-calendar-today text-success"></i>
                                </div>
                            </div>
                            <div class="preview-item-content">
                                <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li class="nav-item nav-category">
                <span class="nav-link">Navigation</span>
            </li>
            <li class="nav-item menu-items">

                <Router-Link class="nav-link" :to="{ name: 'Dashboard' }">
                    <span class="menu-icon">
                        <i class="mdi mdi-speedometer"></i>
                    </span>
                    <span class="menu-title">Dashboard</span>
                </Router-Link>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" data-toggle="collapse" href="#ui-setup" aria-expanded="false" aria-controls="ui-setup">
                    <span class="menu-icon">
                        <i class="mdi mdi-laptop"></i>
                    </span>
                    <span class="menu-title">Setup</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-setup">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'StorePage' }">Store</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'EmpList' }">Employee</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'Attendence' }">Attendence</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'Leave' }">Leave</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'Register' }">Brand-Category</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" to="/register">Login</Router-Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" data-toggle="collapse" href="#ui-purchase" aria-expanded="false"
                    aria-controls="ui-purchase">
                    <span class="menu-icon">
                        <i class="mdi mdi-cart"></i>
                    </span>
                    <span class="menu-title">Reports</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-purchase">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'AttendenceReport' }">Attendence Report</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'CustomerPage' }">Purchase Order</Router-Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" data-toggle="collapse" href="#ui-sales" aria-expanded="false" aria-controls="ui-sales">
                    <span class="menu-icon">
                        <i class="mdi mdi-cube-outline"></i>
                    </span>
                    <span class="menu-title">Sales</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-sales">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'StorePage' }">Sales Order</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'CustomerPage' }">Delivery Chalan</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'CustomerPage' }">Seles Invoice</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'CustomerPage' }">Seles Return</Router-Link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" data-toggle="collapse" href="#ui-store" aria-expanded="false" aria-controls="ui-store">
                    <span class="menu-icon">
                        <i class="mdi mdi-cube-outline"></i>
                    </span>
                    <span class="menu-title">Store & Inventory</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-store">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'StorePage' }">Current Stock</Router-Link>
                        </li>
                        <li class="nav-item">
                            <Router-Link class="nav-link" :to="{ name: 'CustomerPage' }">Stock Reports</Router-Link>
                        </li>

                    </ul>
                </div>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" href="pages/charts/chartjs.html">
                    <span class="menu-icon">
                        <i class="mdi mdi-chart-bar"></i>
                    </span>
                    <span class="menu-title">Charts</span>
                </a>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" href="pages/icons/mdi.html">
                    <span class="menu-icon">
                        <i class="mdi mdi-contacts"></i>
                    </span>
                    <span class="menu-title">Icons</span>
                </a>
            </li>
            <li class="nav-item menu-items">
                <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                    <span class="menu-icon">
                        <i class="mdi mdi-security"></i>
                    </span>
                    <span class="menu-title">User Pages</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="auth">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                        </li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                        <li class="nav-item"> <Router-Link class="nav-link" to="/register">Register</Router-Link></li>

                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>
