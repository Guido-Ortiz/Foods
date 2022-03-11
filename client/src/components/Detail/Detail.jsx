import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getDetail, resetDetail } from '../../actions/actions';
import Loading from '../Loading/Loading';
import Title from '../Title/Title';
import s from './Detail.module.css';

function Detail() {

    const dispatch = useDispatch()
    const detail = useSelector(state => state.detail)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
        return () => dispatch(resetDetail())
    }, [dispatch])

    return(
        <div>
            <Title />
            {
                detail ? (
                    <div className={s.grid}>
                        <div className={s.flex}>
                            <h2 className={s.name}>{detail.name}</h2>
                            <div className={s.group}>
                                <div className={s.description}>Summary</div>
                                <p className={s.text}>{detail.summary.replace(/(<([^>]+)>)/ig, '')}</p>
                            </div>
                            
                            <div className={s.steps}>
                                <div className={s.description}>Steps</div>
                                {
                                    detail.analyzedInstructions && detail.analyzedInstructions.map(i => {
                                        return(
                                            <p className={s.text}>{i}</p>
                                        )
                                    })
                            }
                            </div>
                            
                            <div className={s.steps}>
                                <div className={s.description}>Diets</div>
                                {
                                    detail.diets.map(d => {
                                        return(
                                            <p className={s.list}>{d.name}</p>
                                        )
                                    })
                                    
                                }
                                <Link to='/home'>
                                    <button className={s.btn}>HOME</button>
                                </Link>
                            </div>
                            
                            
                        </div>
                        
                        <div className={s.rightInfo}>
                            <img src={detail.image} alt='img not found' className={s.img}/>
                            <div className={s.score}>
                                <div className={s.items}>
                                    <div className={s.description}>Score</div>
                                    <p className={s.text}>{detail.score}</p>
                                </div>
                                <div className={s.items}>
                                    <div className={s.description}>Health Score</div>
                                    <p className={s.text}>{detail.healthScore}</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        

                        
                        
                    </div>
                ) : <div>
                        <Loading />
                    </div>
            }
        </div>
        
    )

}

export default Detail;