// JavaScript로 이미지 변경 처리
const image = document.getElementById('b2');

const imageArray = [
    "images/b2.jpg",
    "images/b1.jpg",
    "images/1f.jpg",
    "images/2f.jpg",
    "images/3f.jpg",
    "images/4f.jpg",
    "images/5f.jpg",
    "images/6f.jpg",
    "images/7f.jpg",
    "images/8f.jpg",
    "images/9f.jpg",
    "images/10f.jpg",
    "images/11f.jpg",
    "images/12f.jpg",
    "images/13f.jpg",
    "images/스크린샷 2023-10-30 오후 4.00.23.png"
    // 이미지 파일 경로를 필요한 만큼 추가할 수 있습니다.
];
// 버튼 클릭 이벤트 핸들러
function changeImage(imageIndex) {
    image.src = imageArray[imageIndex];
    image.alt = `이미지 ${imageIndex + 1}`;
}


window.addEventListener('load', function() {
    console.log("load is call")

    for (let i = 0; i < imageArray.length; i++) {
        const button = document.getElementById(`change-button-${i + 1}`);
        button.addEventListener('click', function () {
            changeImage(i);
        });
    }


    
	//실행될 코드
    document.getElementById("customer-info").addEventListener("click", async function () {
        var customerName = document.getElementById("customer-name").value;
        var customerNumber = document.getElementById("customer-number").value;
        var email = document.getElementById("customer-email").value;

        const webHookUrl = "https://hooks.slack.com/services/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";
        const data = {
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "새로운 상담 신청이 왔습니다.",
                        "emoji": true
                    }
                },
                {
                    "type": "section",
                    "fields": [
                        {
                            "type": "mrkdwn",
                            "text": `*이름:*\n${customerName}`
                        },
                        {
                            "type": "mrkdwn",
                            "text": `*연락처:*\n${customerNumber}`
                        }
                    ]
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*내용*\n```" + email + "```"
                    }
                }
            ]
        }
        await axios.post(webHookUrl, JSON.stringify(data), {
            transformRequest(data, headers) {
                if (headers && headers.common && headers.common['Content-Type']) {
                    delete headers.common['Content-Type'];
                }
                return data;
                
            },
        });
    });
});

// 개인정보동의 모달
const modalOpenButton = document.getElementById('modalOpenButton');
const modal = document.getElementById('modalContainer');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
  
  $('input').click(function() {
    $('input').removeClass("active");
    $(this).addClass("active");
  });

  modal.addEventListener('touchstart', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
  
  $('input').click(function() {
    $('input').removeClass("active");
    $(this).addClass("active");
  });


$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'-300px'},1000);
            }
            
        }); 
    });
});

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");

  toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const closeModalHandler = e => {
	e.preventDefault();
	e.returnValue = '';
};



function handleOrientationChange() {
    if (window.orientation === 90 || window.orientation === -90) {
        // 가로 모드에서 실행할 작업을 여기에 추가
        alert("가로 모드는 지원되지 않습니다. 화면을 세로 모드로 유지해주세요.");
        // 또는 세로 모드로 강제로 전환할 수 있음:
        window.screen.orientation.lock('portrait');
    }
}

// 초기화 및 가로 모드 감지 이벤트 등록
window.addEventListener('orientationchange', handleOrientationChange);

// 페이지 로드 시 초기 상태를 확인합니다.
handleOrientationChange();