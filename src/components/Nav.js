import './Nav.css';

import { React, useState } from 'react';
// nav
import { Link } from 'react-router-dom';

// MUI 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import $ from 'jquery'; 
// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
// $(document).ready(function(){
// 	setTimeout(function(){ test(); });
// });
$(function() {
    setTimeout(function(){ test(); });
    $( "p" ).text( "The DOM is now loaded and can be manipulated." );
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});



$(".navbar-toggler").on('click', (function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
}));

// (function() { 		$('document').on('click', function(){ 			console.log("OUCH!"); 		}); 	});


// $(function(){
// //code here
// });


// --------------add active class-on another-page move----------
//jQuery(document).ready(function($){

$(function() {
// jQuery(function($) { })
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
$(window).on('load',function () {
    var current = window.location.pathname;
    console.log(current);
    $('#navbarSupportedContent ul li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.parent().addClass('active');
            $this.parents('.menu-submenu').addClass('show-dropdown');
            $this.parents('.menu-submenu').parent().addClass('active');
        }else{
            $this.parent().removeClass('active');
        }
    })
});



export default function Nav(){
    return(
        <div>
        <nav class="navbar navbar-expand-custom navbar-mainbg">
                <a class="navbar-brand navbar-logo" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars text-white"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><i class="fas fa-tachometer-alt"></i>Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/track"><i class="far fa-address-book"></i>Track</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/analytics"><i class="far fa-clone"></i>Analytics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/settings"><i class="far fa-calendar-alt"></i>Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
