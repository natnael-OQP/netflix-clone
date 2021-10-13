import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 100%;
    height:100vh;
    overflow: hidden;
    position: relative;
    color:#fff;
    background-color: #000;
`;

export const ProfileBody = styled.div`
    /* position: absolute; */
    display:flex;
    flex-direction: column;
    width:50%;
    margin:0 auto;
    max-width:700px;
    /* background-color: #fff; */
    margin-top:70px;
`;

export const Title = styled.h1`
    font-size:3rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color:#fff;
    margin-bottom:2rem;
    border-bottom: 1px solid w;
`;

export const ProfileInfo = styled.div`
    display:flex;
`;

export const ProfileImage = styled.img`
    width:80px;
    height:80px;
    object-fit: contain;
`;

export const ProfileDetail = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    margin-left:1rem;
`;

export const Email = styled.h4`
    padding:.4rem 1.5rem;
    background-color:#32333B;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;
                        

export const ProfilePlans = styled.div`
    display: flex;
    flex-direction: column;
`;
                        
export const PlansTitle = styled.h3`
    padding:.3rem;
    border-bottom: 1px solid #282c2d;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;

export const Time = styled.h4`
padding:.4rem;
font-weight: 400;
font-family: 'Poppins', sans-serif;
    
`;
export const Plan = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1rem 2rem;
`;

export const PlanNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PlanName = styled.h4`
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;

export const PlanQuality = styled.h5`
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;