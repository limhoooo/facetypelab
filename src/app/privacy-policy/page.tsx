import type { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: '개인정보처리방침 | FaceType Lab',
  description: 'FaceType Lab 개인정보처리방침',
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="개인정보처리방침"
      subtitle="Privacy Policy"
      updatedAt="2026년 6월 24일"
    >
      <p>
        FaceType Lab(이하 &ldquo;서비스&rdquo;)은 이용자의 개인정보를 소중히 여기며,
        「개인정보 보호법」 및 관련 법령을 준수합니다.
        본 방침은 서비스가 수집하는 정보, 사용 방법, 보호 조치에 대해 안내합니다.
      </p>

      <h2>1. 수집하는 개인정보</h2>
      <h3>가. 이미지 데이터</h3>
      <p>
        이용자가 업로드하는 사진은 <strong>브라우저 내에서만 처리</strong>되며,
        서버로 전송되거나 저장되지 않습니다.
        이미지 분석은 TensorFlow.js를 통해 이용자의 기기에서 직접 실행됩니다.
      </p>

      <h3>나. 자동 수집 정보</h3>
      <p>서비스 이용 과정에서 아래 정보가 자동으로 수집될 수 있습니다.</p>
      <ul>
        <li>IP 주소, 브라우저 종류 및 버전</li>
        <li>방문 페이지, 접속 시간</li>
        <li>기기 종류 및 운영체제</li>
      </ul>

      <h2>2. 개인정보의 이용 목적</h2>
      <ul>
        <li>서비스 제공 및 운영</li>
        <li>서비스 이용 통계 분석 및 품질 개선</li>
        <li>광고 서비스 제공 (Google AdSense)</li>
      </ul>

      <h2>3. 제3자 광고 서비스 (Google AdSense)</h2>
      <p>
        본 서비스는 <strong>Google AdSense</strong>를 통해 광고를 게재합니다.
        Google은 쿠키를 사용하여 이용자의 관심사에 맞는 광고를 표시할 수 있습니다.
      </p>
      <ul>
        <li>Google의 광고 쿠키 사용으로 인해 방문 기록이 광고에 활용될 수 있습니다.</li>
        <li>
          Google 광고 개인화 설정은{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 설정
          </a>
          에서 변경하실 수 있습니다.
        </li>
        <li>
          Google의 개인정보 처리방침은{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            여기
          </a>
          에서 확인하실 수 있습니다.
        </li>
      </ul>

      <h2>4. 쿠키(Cookie) 사용</h2>
      <p>
        서비스는 Google AdSense 광고 제공을 위해 쿠키를 사용합니다.
        브라우저 설정에서 쿠키 저장을 거부할 수 있으나,
        일부 서비스 이용에 제한이 생길 수 있습니다.
      </p>

      <h2>5. 개인정보의 보유 및 파기</h2>
      <p>
        업로드된 이미지는 서버에 저장되지 않으므로 별도의 파기 절차가 없습니다.
        자동 수집된 로그 데이터는 서비스 운영 목적 달성 후 지체 없이 파기합니다.
      </p>

      <h2>6. 미성년자 보호</h2>
      <p>
        본 서비스는 만 14세 미만 아동을 대상으로 개인정보를 의도적으로 수집하지 않습니다.
        만 14세 미만 아동은 보호자의 동의 하에 서비스를 이용하여야 합니다.
      </p>

      <h2>7. 이용자의 권리</h2>
      <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
      <ul>
        <li>개인정보 처리에 대한 동의 철회</li>
        <li>개인정보 열람, 정정, 삭제 요청</li>
        <li>개인정보 처리 정지 요청</li>
      </ul>
      <p>
        권리 행사는 아래 이메일로 문의해 주세요.
        요청 후 10일 이내 처리 결과를 안내드립니다.
      </p>

      <h2>8. 개인정보 보호 담당자</h2>
      <ul>
        <li><strong>담당자:</strong> FaceType Lab 운영팀</li>
        <li><strong>이메일:</strong> <a href="mailto:dlagh123@gmail.com">dlagh123@gmail.com</a></li>
      </ul>

      <h2>9. 방침 변경 안내</h2>
      <p>
        본 개인정보처리방침은 법령 또는 서비스 변경에 따라 수정될 수 있습니다.
        변경 시 서비스 내 공지사항을 통해 사전 안내드립니다.
      </p>
    </PolicyLayout>
  );
}
