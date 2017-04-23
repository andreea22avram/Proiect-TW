var picture;

function editUserInfo(section){
	if (section == 1) {

		$("#profile-pic").attr('class', 'img-rounded');

		document.getElementById('edit-link').style.display = "block";
		document.getElementById('group_1').style.display = "block";

		picture = document.getElementById('profile-pic').getAttribute('src');

		document.getElementById('edit-link').onclick = function() {
    		document.getElementById('my-file').click();
		};

		var node = document.getElementById('name-wrapper');
		var txt = node.textContent;
		document.getElementById('edit_name').setAttribute('value', txt);
		document.getElementById('edit_name').style.display = "inline-block";
		node.style.display = "none";
		
		node = document.getElementById('email-wrapper');
		var txt = node.textContent;
		document.getElementById('edit_email').setAttribute('value', txt);
		document.getElementById('edit_email').style.display = "inline-block";
		node.style.display = "none";
	}

	else if (section == 2) {
		document.getElementById('group_2').style.display = "block";

		var node = document.getElementById('studies-wrapper');
		var txt = node.textContent;
		document.getElementById('edit_studies').setAttribute('value', txt);
		document.getElementById('edit_studies').style.display = "inline-block";
		node.style.display = "none";
		
		node = document.getElementById('city-wrapper');
		var txt = node.textContent;
		document.getElementById('edit_city').setAttribute('value', txt);
		document.getElementById('edit_city').style.display = "inline-block";
		node.style.display = "none";
	}

	else if (section == 3) {
		document.getElementById('group_3').style.display = "block";

		document.getElementById('birthdate-wrapper').style.display = "none";
		document.getElementById('birthdate_picker').setAttribute('value',document.getElementById('birthdate-wrapper').textContent);
		document.getElementById('birthdate_picker').style.display = "inline-block";

		document.getElementById('gender-wrapper').style.display = "none";
		document.getElementById('g_'+document.getElementById('gender-wrapper').textContent).setAttribute('selected',document.getElementById('gender-wrapper').textContent);
		document.getElementById('gender_dropdown').style.display = "inline-block";

		var node = document.getElementById('phone-wrapper');
		var txt = node.textContent;
		document.getElementById('edit_phone').setAttribute('value', txt);
		document.getElementById('edit_phone').style.display = "inline-block";
		node.style.display = "none";
	}

	else if (section == 4) {
		document.getElementById('group_4').style.display = "block";

		document.getElementById('git-link-wrapper').style.display = "none";
		document.getElementById('edit_git_link').setAttribute('value',document.getElementById('git-link-wrapper').textContent);
		document.getElementById('edit_git_link').style.display = "inline-block";
	}
};


function cancel_edit(section){
	if(section == 1){
		
		$("#profile-pic").attr('class', 'img-circle');
		$("#profile-pic").attr('src', picture);

		document.getElementById('edit-link').style.display = "none";
		document.getElementById('group_1').style.display = "none";

		document.getElementById('edit_name').style.display = "none";
		document.getElementById('edit_email').style.display = "none";

		document.getElementById('name-wrapper').style.display = "block";
		document.getElementById('email-wrapper').style.display = "block";
	} 
	else if(section == 2) {
		document.getElementById('group_2').style.display = "none";

		document.getElementById('edit_studies').style.display = "none";
		document.getElementById('edit_city').style.display = "none";

		document.getElementById('studies-wrapper').style.display = "block";
		document.getElementById('city-wrapper').style.display = "block";
	}
	else if(section == 3) {
		document.getElementById('group_3').style.display = "none";

		document.getElementById('birthdate-wrapper').style.display = "inline-block";
		document.getElementById('gender-wrapper').style.display = "inline-block";
		document.getElementById('phone-wrapper').style.display = "inline-block";

		document.getElementById('gender_dropdown').style.display = "none";
		document.getElementById('birthdate_picker').style.display = "none";
		document.getElementById('edit_phone').style.display = "none";

		
	}
	else if(section == 4) {
		document.getElementById('group_4').style.display = "none";

		document.getElementById('git-link-wrapper').style.display = "inline-block";
		document.getElementById('edit_git_link').style.display = "none";
	}
};

function save_edit(section){
	if(section == 1){
		document.getElementById('name-wrapper').textContent = document.getElementById('edit_name').value;
		document.getElementById('email-wrapper').textContent = document.getElementById('edit_email').value;
		picture = document.getElementById('profile-pic').getAttribute('src');
		cancel_edit(1);
	} 
	else if(section == 2) {
		document.getElementById('studies-wrapper').textContent = document.getElementById('edit_studies').value;
		document.getElementById('city-wrapper').textContent = document.getElementById('edit_city').value;
		cancel_edit(2);
	}
	else if(section == 3) {
		document.getElementById('birthdate-wrapper').textContent = document.getElementById('birthdate_picker').value;
		var g = document.getElementById('gender_dropdown');
		document.getElementById('gender-wrapper').textContent = g.options[g.selectedIndex].text;
		document.getElementById('phone-wrapper').textContent = document.getElementById('edit_phone').value;
		cancel_edit(3);
	}
	else if(section == 4) {
		document.getElementById('git-link-wrapper').setAttribute('href',document.getElementById('edit_git_link').value);
		document.getElementById('git-link-wrapper').textContent = document.getElementById('edit_git_link').value;
		cancel_edit(4);
	}
}

window.onload=function(){
	document.getElementById('my-file').addEventListener('change', readURL, true);
}
function readURL(){
   var file = document.getElementById("my-file").files[0];
   var reader = new FileReader();
   reader.onprogress = function(){
   		document.getElementById('profile-pic').setAttribute('src',reader.result);        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{

    }
}