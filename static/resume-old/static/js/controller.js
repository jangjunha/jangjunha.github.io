var myApp = angular.module('myApp', ['ngSanitize']);

myApp.controller('ProjectCtrl', function ($scope) {
    $scope.projects = [
        {
            'title': '문답 도우미',
            'role': 'Android ⋅ Web 개발',
            'links': [
                {
                    'name': 'GOOGLE PLAY',
                    'url': 'https://play.google.com/store/apps/details?id=jangJunha.qna_helper'
                },
                {
                    'name': 'WEB',
                    'url': 'http://qnahelp.cafe24.com'
                }
            ],
            'description': 'SNS에 돌아다니는 &#39;문답&#39;을 편리하게 할 수 있도록 돕는 안드로이드 앱<br>2012년 9월 출시 / 15,000 DL',
            'skills': ['Android', 'PHP'],
            'thumbnail': 'static/img/qnahelp_thumbnail.png',
            'images': [
                {
                    'url': 'static/img/qnahelp_android_1.png', 
                    'description': '&lt;문답 도우미&gt;는 SNS에 올라오는 문답을 편리하게 할 수 있도록 도와주는 유틸리티입니다.<br>문답을 카테고리별로 나눠 볼 수 있고 사용자가 직접 문답 양식을 만들어 올릴 수 있습니다.'
                },
                {
                    'url': 'static/img/qnahelp_android_2.png',
                    'description': '문답 내용을 미리 훑어볼 수 있습니다.<br>이전에 저장해 둔 문답이 있을 경우 불러와 이어 할 수 있습니다.'
                },
                {
                    'url': 'static/img/qnahelp_android_3.png',
                    'description': '문답이 끝나면 다른 앱으로 공유하거나 저장할 수 있습니다.<br>문답을 공유하면 &lt;문답 도우미&gt; URL이 삽입되며 친구가 URL을 클릭하면 &lt;문답 도우미&gt; 앱에서 해당 문답을 바로 할 수 있습니다. '
                },
                {
                    'url': 'static/img/qnahelp_web_1.png',
                    'description': ''
                },
                {
                    'url': 'static/img/qnahelp_web_2.png',
                    'description': ''
                }
            ]
        },
        {
            'title': '만남의 광장',
            'role': 'Web Frontend 개발',
            'links': [
                {
                    'name': 'GOOGLE PLAY',
                    'url': 'https://play.google.com/store/apps/details?id=kr.meetingsquare'
                },
                {
                    'name': 'WEB',
                    'url': 'http://www.meetingsquare.kr'
                }
            ],
            'description': '투표를 통해 모임 시간을 지정해주는 서비스<br>Smarteen App Challenge 2013 가작 / 7,000  DL',
            'skills': ['AngularJS', 'HTML / CSS / JS'],
            'thumbnail': 'static/img/meetingsquare_thumbnail.png',
            'images': [
                {
                    'url': 'static/img/meetingsquare_web_1.png',
                    'description': '&lt;만남의 광장&gt;은 사람들의 모임 시간을 투표를 통해 정해주는 서비스입니다.<br>모바일 웹으로 만들어졌습니다.'
                },
                {
                    'url': 'static/img/meetingsquare_web_2.png',
                    'description': '메인 화면으로 참여중인 모임 리스트가 보입니다. AngularJS를 사용했습니다.'
                },
                {
                    'url': 'static/img/meetingsquare_web_3.png',
                    'description': ''
                },
                {
                    'url': 'static/img/meetingsquare_web_4.png',
                    'description': ''
                },
                {
                    'url': 'static/img/meetingsquare_web_5.png',
                    'description': ''
                }
            ]
        },
        {
            'title': 'Artsquare',
            'role': 'API Server ⋅ Web Frontend 개발',
            'links': [
                {
                    'name': 'WEB',
                    'url': 'http://noble-particle-729.appspot.com'
                }
            ],
            'description': '온라인 예술 작품 전시 서비스<br>Smarteen App Challenge 2014 장려상',
            'skills': ['Google App Engine', 'Flask', 'AngularJS'],
            'thumbnail': 'static/img/artsquare_web_1.png',
            'images': [
                {
                    'url': 'static/img/artsquare_web_1.png',
                    'description': '&lt;아트스퀘어&gt;는 온라인 예술 작품 전시 서비스입니다.<br>API서버와 웹개발을 맡았고 사진은 웹페이지입니다.<br>사용자들이 올린 예술 작품 리스트가 나오며 로그인 후 좋아요를 클릭하거나 덧글을 달 수 있습니다.<br>페이스북 계정으로 로그인할 수 있습니다. 리스트는 AngularJS를 사용해 구현했으며 스크롤하여 로딩합니다.'
                },
                {
                    'url': 'static/img/artsquare_web_2.png',
                    'description': '작품 상세보기 화면입니다. 사진이 여러 개일 경우 넘겨볼 수 있고 좋아요를 누르거나 덧글을 달 수 있습니다. AngularJS를 사용했습니다.'
                }
            ]
        },
        {
            'title': '둥글레팡',
            'role': 'Android 개발 ⋅ 소켓 통신',
            'description': 'PC 화면을 보면서 스마트폰 G-센서로 캐릭터를 조작하며 즐기는 게임<br>교내 디지털콘텐츠경진대회 금상',
            'skills': ['Android', 'JAVA NIO.2'],
            'thumbnail': 'static/img/diskpang_thumbnail.png',
            'images': [
                {
                    'url': 'static/img/diskpang_android_1.png',
                    'description': '&lt;둥글레팡&gt; 컨트롤러입니다. 위 화면을 통해 PC앱에 접속할 수 있습니다.<br>안드로이드 컨트롤러를 개발하고 소켓 통신을 맡았습니다. 소켓 통신에는 Java NIO.2를 이용했습니다.'
                },
                {
                    'url': 'static/img/diskpang_android_2.png',
                    'description': '안드로이드 자이로센서를 통해 캐릭터를 조작합니다. 연필의 방향이 캐릭터가 이동하는 방향이며 영점 설정이 가능합니다.'
                },
                {
                    'url': 'static/img/diskpang_pc_2.png',
                    'description': 'PC앱 스크린샷입니다.'
                },
                {
                    'url': 'static/img/diskpang_pc_3.png',
                    'description': 'PC앱 스크린샷입니다.'
                }
            ]
        },
        {
            'title': '1D 벽돌깨기',
            'role': 'Android 개발',
            'links': [
                {
                    'name': 'GOOGLE PLAY',
                    'url': 'https://play.google.com/store/apps/details?id=jangJunha.bricks'
                }
            ],
            'description': '캐릭터가 공을 쏘는 형태의 바가 없는 벽돌깨기 게임<br>공을 화면 모서리에 튕길수록 데미지가 세짐. 멀티플레이 개발 중',
            'skills': ['Android'],
            'thumbnail': 'static/img/1dbrick_android_multi_2.png',
            'images': [
                {
                    'url': 'static/img/1dbrick_android_1.png',
                    'description': '&lt;1D벽돌깨기&gt;는 캐릭터(회색 원)이 발사체(빨간 작은 원)을 발사해 벽돌(파란 사각형)을 깨는 게임입니다. 발사체는 화면 모서리에 튀길수록 강해지며 최대 3번까지 튈 수 있습니다. 벽돌의 HP는 투명도로 표현됩니다.<br>화면 왼쪽 절반 영역에서 드래그하면 캐릭터가 이동하고 오른쪽 영역을 터치하면 발사체가 발사됩니다. 발사체는 동시에 최대 3개까지 존재할 수 있습니다.'
                },
                {
                    'url': 'static/img/1dbrick_android_2.png',
                    'description': '맵은 랜덤하게 생성됩니다.'
                },
                {
                    'url': 'static/img/1dbrick_android_3.png',
                    'description': ''
                },
                {
                    'url': 'static/img/1dbrick_android_multi_1.png',
                    'description': '데이터 문제로 아직 출시하지 않았지만 멀티플레이를 개발했습니다. 게임 서버가 따로 존재해 참가코드를 공유한 두 사람이 어디서나 대결할 수 있습니다. 두 사람이 모두 준비되면 게임이 시작됩니다.'
                },
                {
                    'url': 'static/img/1dbrick_android_multi_2.png',
                    'description': '블럭을 공격할때마다 점수를 획득하고 마지막으로 블록을 제거하는 플레이어가 추가 점수를 획득합니다. 플레이어당 공을 최대 3개 보유할 수 있지만 다른 플레이어가 먹어버릴 수 있으니 주의해서 발사해야합니다.'
                },
                {
                    'url': 'static/img/1dbrick_android_multi_3.png',
                    'description': '최종적으로 점수와 게임 결과가 출력됩니다.'
                }
            ]
        },
        {
            'title': 'IU Fan Web',
            'role': 'Web 개발',
            'links': [
                {
                    'name': 'WEB',
                    'url': 'http://qnahelp.cafe24.com/iu'
                }
            ],
            'description': '아이유의 음반 ⋅ 연기 작품이 소개되어있는 Parallax Scrolling 팬 페이지',
            'skills': ['HTML / CSS / JS'],
            'thumbnail': 'static/img/iufanweb_web_2.png',
            'images': [
                {
                    'url': 'static/img/iufanweb_web_1.png',
                    'description': '가수 아이유와 배우 아이유의 작품을 볼 수 있습니다. 화면을 클릭해 이동합니다.'
                },
                {
                    'url': 'static/img/iufanweb_web_2.png',
                    'description': '가수 아이유의 앨범 소개 페이지입니다. Parallax Scrolling이 적용되어있습니다.'
                },
                {
                    'url': 'static/img/iufanweb_web_3.png',
                    'description': '배우 아이유의 출연작 리스트 페이지입니다. 마찬가지로 Parallax Scrolling이 적용되어있습니다. '
                }
            ]
        },
        {
            'title': 'MelOn Playlist Editor',
            'role': 'Android ⋅ Web 개발',
            'links': [
                {
                    'name': 'GOOGLE PLAY',
                    'url': 'https://play.google.com/store/apps/details?id=kr.heek.meloneditor'
                }
            ],
            'description': '(MelOn 개발사와 무관)<br>안드로이드 멜론앱의 로컬플레이리스트를 PC 웹에서 수정',
            'skills': ['Android', 'AngularJS'],
            'thumbnail': 'static/img/mpe_thumbnail.png',
            'images': [
                {
                    'url': 'static/img/mpe_android.png',
                    'description': '안드로이드 MelOn앱의 로컬 플레이리스트를 PC에서 수정할 수 있게 하는 유틸리티입니다. Start버튼을 누르면 스마트폰에서 웹서버가 작동되고 같은 네트워크의 PC에서 접속해 플레이리스트를 수정할 수 있습니다. 안드로이드 버전 업데이트 후 오류가 발생해 수정 예정입니다 ㅜㅜ'
                },
                {
                    'url': 'static/img/mpe_web.png',
                    'description': '플레이리스트 보드가 생기고 곡이 들어가있습니다. 곡의 순서를 드래그앤드롭으로 바꿀 수 있고 오른쪽 곡 리스트에서 끌어와 곡을 추가하거나 삭제할 수 있습니다. 오른쪽 곡 리스트에서는 곡명, 앨범명, 아티스트명으로 검색을 할 수 있습니다. AngularJS를 사용했습니다. '
                }
            ]
        },
        {
            'title': '쨖쨔ㄲ',
            'role': 'Server-side ⋅ Frontend ⋅ 게임 개발',
            'links': [
                {
                    'name': 'GITHUB',
                    'url': 'https://github.com/jangjunha/clap_rythm'
                },
                {
                    'name': 'WEB',
                    'url': 'https://clap.heek.kr'
                }
            ],
            'description': 'HTML5기반 웹에서 박수로 즐기는 리듬게임!<br>Google HackFair 2015 전시 부스 운영',
            'skills': ['Web Audio API', 'Google App Engine', 'Flask'],
            'thumbnail': 'static/img/claprythm_web_1.png',
            'images': [
                {
                    'url': 'static/img/claprythm_web_1.png',
                    'description': '&lt;쨖쨔ㄲ&gt;은 터치나 버튼 클릭이 아닌 박수를 쳐서 즐기는 리듬게임입니다. YouTube URL을 입력하면 노트를 생성하거나 다른 사람이 만든 노트를 플레이할 수 있으며 랜덤으로 떨어지는 노트로 플레이할 수도 있습니다. 아래에 있는 최근에 생성된 노트들을 플레이할 수도 있습니다.<br>Google HackFair 2015 Music파트에서 부스를 운영했습니다.'
                },
                {
                    'url': 'static/img/claprythm_web_2.png',
                    'description': '게임 전 박수 소리 판정 기준을 조정할 수 있습니다. 볼륨(빨간 영역)이 검은 선에 도달하면 박수로 인식됩니다. 박수로 인식되면 파란 동심원이 퍼져나갑니다.'
                },
                {
                    'url': 'static/img/claprythm_web_3.png',
                    'description': '오른쪽에서 왼쪽으로 오는 검은 노트가 빨간 영역에 도달했을 때 박수를 치면 됩니다. 빨간 영역의 진하기에 따라 점수가 달라지며 콤보가 쌓이면 더 높은 점수를 얻을 수 있습니다. 영상이 끝나면 스코어보드가 출력되며 결과를 페이스북에 공유할 수 있습니다.<br>HTML5 Web Audio API와 Canvas를 사용했습니다.'
                }
            ]
        },
        {
            'title': 'Mergic',
            'role': 'Web ⋅ Merge Server 개발',
            'links': [
                {
                    'name': 'GITHUB',
                    'url': 'https://github.com/jangjunha/mergic-merge'
                }
            ],
            'description': '사용자들이 업로드한 여러 연주를 합쳐 하나의 음악을 만드는 서비스<br>삼성소프트웨어멤버십 Junior Member 해커톤 개발작',
            'skills': ['Python', 'Google App Engine', 'Flask'],
            'thumbnail': 'static/img/mergic_web_3.png',
            'images': [
                {
                    'url': 'static/img/mergic_web_1.png',
                    'description': '&lt;Mergic&gt;은 여러 사람들이 부른 노래나 연주를 합쳐 하나의 합주곡을 만드는 서비스입니다.'
                },
                {
                    'url': 'static/img/mergic_web_2.png',
                    'description': '사용자가 주제를 생성하고 필요한 악기(연주)를 추가할 수 있습니다.'
                },
                {
                    'url': 'static/img/mergic_web_3.png',
                    'description': '주제를 본 사용자는 자신의 연주를 해당 주제에 업로드할 수 있습니다. 또 원하는 연주들을 선택해 합칠 수 있습니다.'
                },
                {
                    'url': 'static/img/mergic_web_4.png',
                    'description': '합치기 요청을 하면 Merge Server Queue에 요청이 추가되며 합주 생성이 완료되면 재생해볼 수 있습니다.'
                },
                {
                    'url': 'static/img/mergic_merge_flow.png',
                    'description': 'Merge(합주 생성)의 대략적인 동작 Flow입니다.'
                }
            ]
        },
        {
            'title': '너랑나의 시간들 (IUTimes Clock)',
            'role': 'Web 개발',
            'links': [
                {
                    'name': 'DEMO WEB',
                    'url': 'http://clock.iutimes.com/iu/demo'
                }
            ],
            'description': '아이유 손 모양 정보를 입력받아 해당 시각에 맞는 사진을 보여주는 시계',
            'skills': ['HTML / CSS / JS', 'Google App Engine', 'Flask'],
            'thumbnail': 'static/img/iutimes_clock_web_1.png',
            'images': [
                {
                    'url': 'static/img/iutimes_clock_web_1.png',
                    'description': '아이유 손 모양을 통해 현재 시각을 보여주는 서비스입니다! 지금은 사용자들의 입력으로 DB를 쌓아 보여주고 있고 추후 크롤링과 손 모양을 분석해 DB 축적을 계획하고 있습니다.'
                },
                {
                    'url': 'static/img/iutimes_clock_web_2.png',
                    'description': '현재 시각과 맞는 사진이 없을 경우 표시되는 페이지입니다.'
                },
                {
                    'url': 'static/img/iutimes_clock_web_3.png',
                    'description': '사용자가 시계를 등록하는 페이지입니다. 사진 위에 분침, 시침의 끝과 시계의 중심을 클릭하여 등록합니다. HTML5 Canvas를 사용했습니다.'
                }
            ]
        },
        {
            'title': '아니, 이게 왜 되는거지?',
            'role': 'Web Frontend 개발',
            'description': '실시간으로 코드를 실행해볼 수 있는 개발 질문 / 답변 서비스<br>교내 모바일콘텐츠경진대회 동상',
            'skills': ['HTML / CSS / JS'],
            'thumbnail': 'static/img/ask_web_4.png',
            'images': [
                {
                    'url': 'static/img/ask_web_1.png',
                    'description': '&lt;아니, 이게 왜 되는거지?&gt;는 개발자들이 질문을 올리고 답변을 받는 커뮤니티입니다. 질문을 하고 답변을 할 때 코드를 올리고 실시간으로 컴파일해볼 수 있습니다. 디자이너로부터 디자인을 받아 웹 프론트엔드 작업을 했습니다.'
                },
                {
                    'url': 'static/img/ask_web_2.png',
                    'description': ''
                },
                {
                    'url': 'static/img/ask_web_3.png',
                    'description': ''
                },
                {
                    'url': 'static/img/ask_web_4.png',
                    'description': '다음과 같이 왼쪽엔 질문/답변 내용을, 오른쪽에는 코드를 입력할 수 있으며 Run버튼을 눌러 바로 실행시킬 수 있습니다.'
                }
            ]
        },
        {
            'title': 'IU Schedule',
            'role': 'Android 개발',
            'description': '아이유 (전)공식홈페이지의 스케쥴을 파싱해서 안드로이드에서 볼 수 있도록 만든 앱. 스케쥴 시간이 되면 Notification 생성',
            'skills': ['Android'],
            'thumbnail': 'static/img/withiu_thumbnail.png',
            'images': [
                {
                    'url': 'static/img/withiu_android_1.png',
                    'description': '아이유 스케쥴이 공식홈페이지를 통해 올라올 때 모바일 브라우저로 스케쥴을 볼 수 없어서 만든 안드로이드 클라이언트입니다. 공식홈페이지의 스케쥴을 파싱해 월별로 스케쥴을 볼 수 있습니다.'
                },
                {
                    'url': 'static/img/withiu_android_2.png',
                    'description': ''
                },
                {
                    'url': 'static/img/withiu_android_3.png',
                    'description': '스케쥴 시간이 되면 Notification이 생성됩니다.'
                }
            ]
        },
        {
            'title': '품 (PU:M)',
            'role': 'Android 개발',
            'description': '잠금 해제 패턴 외 미리 설정해둔 특정 패턴을 입력할 경우 자동 신고<br>제1회 HAPPYTHON(해커톤) 참여작',
            'skills': ['Android'],
            'thumbnail': 'static/img/pum_thumbnail.png',
            'images': [
                {
                    'url': 'static/img/pum_android_1.png',
                    'description': '제1회 HappyThon(해커톤)에서 <del>무박</del>2박 3일간 개발한 작품으로 잠금 해제 패턴 외에 신고 패턴을 하나 더 두어 신고 패턴을 그릴 경우 미리 지정한 사람에게 현재 위치와 함께 SMS신고가 가는 앱입니다. 패턴 잠금이 걸려있어도 간편하게 신고할 수 있습니다.'
                },
                {
                    'url': 'static/img/pum_android_2.png',
                    'description': ''
                },
                {
                    'url': 'static/img/pum_android_3.png',
                    'description': ''
                },
                {
                    'url': 'static/img/pum_android_4.png',
                    'description': ''
                },
                {
                    'url': 'static/img/pum_android_5.png',
                    'description': '여러 디자인의 테마가 존재해 테마를 바꿀 수 있습니다.'
                }
            ]
        },
        {
            'title': 'Love Letter',
            'role': 'Android SQLite DB',
            'description': '사용자 위치를 기반으로 주변 서비스 이용자에게 러브레터를 보내는 앱<br>제2회 AppJam(해커톤) 참여작',
            'skills': ['Android'],
            'thumbnail': 'static/img/loveletter_thumbnail.png',
            'images': [{'url': 'static/img/loveletter_android_1.png', 'description': ''}, {'url': 'static/img/loveletter_android_2.png', 'description': ''}]
        },
        {
            'title': 'IssueFox',
            'role': 'Android 개발',
            'description': '나에게 그날그날 있던 이슈를 기록했다가 나중에 볼 수 있는 다이어리 앱<br>제3회 AppJam(해커톤) 참여작',
            'skills': ['Android'],
            'thumbnail': 'static/img/issuefox_thumbnail.png',
            'images': [{'url': 'static/img/issuefox_android_1.png', 'description': ''}, {'url': 'static/img/issuefox_android_2.png', 'description': ''}, {'url': 'static/img/issuefox_android_3.png', 'description': ''}]
        },
        {
            'title': '화석발굴',
            'role': 'Web Server 개발',
            'links': [
                {
                    'name': 'GITHUB',
                    'url': 'https://github.com/Remember-Fossil'
                },
                {
                    'name': 'WEB',
                    'url': 'http://remember-fossil.appspot.com'
                }
            ],
            'description': '동아리 후배들에게 잊히지 않기 위해, 선배들을 잊지 않기 위해 페이스북 프로필을 보고 이름을 맞추는 퀴즈 웹 / 제7회 AppJam 은상 수상작',
            'skills': ['Android'],
            'thumbnail': 'static/img/remember_fossil_web_1.png',
            'images': [
                {
                    'url': 'static/img/remember_fossil_web_1.png',
                    'description': '제7회 AppJam 은상 수상작으로 동아리 선배를 잊지 않기 위해, 후배들에게 잊혀지지 않기 위해 만든 서비스입니다. 페이스북 프로필을 보고 이름을 맞추는 방식으로 <del>퇴물</del>선배들을 기억할 수 있습니다. 틀리는 경우 바로 페이스북에 글이 올라가는 짜릿함도 함께합니다.'
                },
                {
                    'url': 'static/img/remember_fossil_web_2.png',
                    'description': '&lt;화석발굴&gt;에 등록된 그룹 리스트입니다.'
                },
                {
                    'url': 'static/img/remember_fossil_web_3.png',
                    'description': '페이스북 그룹을 불러와 추가할 수 있습니다.'
                },
                {
                    'url': 'static/img/remember_fossil_web_4.png',
                    'description': '그룹의 멤버들입니다.'
                },
                {
                    'url': 'static/img/remember_fossil_web_5.png',
                    'description': '퀴즈(시험) 화면입니다. 사진을 보고 5지선다로 누구인지 맞추면 됩니다. 틀리면 즉시 페이스북 그룹에 글이 올라가도록 만들었으나 페이스북에서 인증을 받지 못해 일반 사용자는 이용할 수 없습니다.'
                },
                {
                    'url': 'static/img/remember_fossil_web_6.png',
                    'description': ''
                }
            ]
        },
        {
            'title': 'Hey Peach!',
            'role': 'API Server 개발',
            'description': '음원 스트리밍 API를 제공하는 음원 플랫폼<br>Smarteen App Challenge 2015 가작',
            'skills': ['Google App Engine', 'Google Cloud Storage', 'Flask'],
            'thumbnail': 'static/img/heypeach_document.png',
            'images': [{'url': 'static/img/heypeach_document_edit.png', 'description': 'Swagger.io를 이용해 만든 3rd-party용 API Document 화면입니다.'}]
        },
        {
            'title': 'MusicIN',
            'role': 'Backend ⋅ Android 개발',
            'description': '사용자 선호 음악을 바탕으로 한 매장 선호 음악 재생 서비스',
            'skills': ['Google App Engine', 'Flask', 'Android'],
            'thumbnail': 'static/img/musicin_thumbnail.png',
            'images': [{'url': 'static/img/musicin_android_1.jpg', 'description': ''}, {'url': 'static/img/musicin_android_2.png', 'description': ''}, {'url': 'static/img/musicin_android_3.png', 'description': ''}]
        },
        {
            'title': 'HEEK.KR',
            'role': 'Web 개발',
            'links': [
                {
                    'name': 'GITHUB',
                    'url': 'https://github.com/jangjunha/heek-satcounter'
                },
                {
                    'name': 'WEB',
                    'url': 'http://heek.kr'
                }
            ],
            'description': '사용자가 메시지를 변경할 수 있는 수능 카운터 웹',
            'skills': ['HTML / CSS / JS', 'Flask', 'Google App Engine'],
            'thumbnail': 'static/img/heek_kr.png',
            'images': [{'url': 'static/img/heek_kr.png', 'description': '수능일이 다가올수록 디데이가 초록색에서 빨간색으로 변합니다 -아주 천천히. 가운데 메시지(재수하세요^^ 부분)을 클릭해 수정할 수 있습니다. 앱잼 배너와 눈내리는 효과가 추가된 상태입니다.'}]
        },
    ];

    $scope.popup_project_idx = 0; 
    $scope.popup_image_idx = 0;

    $scope.show_popup = function (index) {
        if ($scope.projects[index].images.length > 0) {
            $scope.popup_project_idx = index;
            $scope.popup_image_idx = 0;
            $scope.popup_paging(0);
            $('#popup-img-box').css('display', 'block');
        }
    };
    $scope.popup_paging = function(d) {
        var new_idx = $scope.popup_image_idx + d;
        var last_idx = $scope.projects[$scope.popup_project_idx].images.length - 1;

        if (new_idx >= 0 && new_idx <= last_idx) {
            if (new_idx <= 0)
                $('#btn-pager-prev').prop('disabled', true);
            else
                $('#btn-pager-prev').prop('disabled', false);

            if (new_idx >= last_idx)
                $('#btn-pager-next').prop('disabled', true);
            else
                $('#btn-pager-next').prop('disabled', false);

            $scope.popup_image_idx = new_idx;
        }
    }
});
